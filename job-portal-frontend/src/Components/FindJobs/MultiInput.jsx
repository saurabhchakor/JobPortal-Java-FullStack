import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Input, Pill, PillsInput, ScrollArea, useCombobox } from '@mantine/core';
import { IconSelector } from '@tabler/icons-react';
import { updateFilter } from '../../Slices/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';

const MultiInput = (props) => {
    const dispatch=useDispatch();
    const filter=useSelector((state)=>state.filter);
    useEffect(()=>{
        setData(props.options);
        
    },[])
    useEffect(()=>{
        setValue(filter[props.title]??[])
    }, [filter])
    const combobox = useCombobox({
        onDropdownClose: () =>
            combobox.resetSelectedOption(),

        onDropdownOpen: () =>
            combobox.updateSelectedOptionIndex('active')

    });
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [value, setValue] = useState([]);
    const exactOptionMatch = data.some((item) => item === search);
    const handleValueSelect = (val) => {
        setSearch('');
        if (val === '$create') {
            setData((current) => [...current, search]);
            setValue((current) => [...current, search]);
            dispatch(updateFilter({[props.title]:[...value, search]}));
        } else {
            dispatch(updateFilter({[props.title]:value.includes(val) ? value.filter((v) => v !== val) : [...value, val]}));
            setValue((current) =>
                current.includes(val) ? current.filter((v) => v !== val) : [...current, val]);
            
        }
    }

    const handleValueRemove = (val) =>{
        dispatch(updateFilter({[props.title]:value.filter((v) => v !== val)}));
        setValue((current) => current.filter((v) => v !== val));
    }
    const values = value
        .slice(0,1)
        .map((item) => (
            <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
                {item.length>=10?item.substring(0, 8)+"..":item}
            </Pill>
        ));


    const options = data
        .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase())).map((item, index) => (
            <Combobox.Option value={item} key={item} active={value.includes(item)}
                className="animate-option-animation opacity-0" 
                style={{ animationDelay: `${index * 30}ms` }}
            >
                <Group gap="sm">
                    <Checkbox
                    size='xs'
                        color='brightSun.4'
                        checked={value.includes(item)}
                        onChange={() => {
                            if(value.includes(item))updateFilter({[props.title]:value.filter((v) => v !== item)});
                            else updateFilter({[props.title]:[...value, item]});
                         }}
                        aria-hidden
                        tabIndex={-1}
                        style={{ pointerEvents: 'none' }}
                    />
                    <span className='text-mine-shaft-300'>{item}</span>
                </Group>
            </Combobox.Option>
        ));

    return (
        <Combobox  store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
            <Combobox.DropdownTarget>
                <PillsInput variant='unstyled' size="sm" pointer onClick={() => combobox.toggleDropdown()}
                    leftSection={<div className="bg-mine-shaft-900 rounded-full mr-2 text-bright-sun-400 p-1"><props.icon size={20} /> </div>}
                    rightSection={<IconSelector  />}
                >

                    <Pill.Group>
                        {value.length > 0 ? (
                            <>
                                {values}
                                {value.length > 1 && (
                                    <Pill >+{value.length - 1} more</Pill>
                                )}
                            </>
                        ) : (
                            <Input.Placeholder className='!text-mine-shaft-300'>{props.title}</Input.Placeholder>
                        )}

                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown className='overflow-hidden'>
                <Combobox.Search className='w-full [&_input]:!px-2 '
                    variant="unstyled" placeholder="Search"
                    value={search}
                    onChange={(event) => {
                        combobox.updateSelectedOptionIndex();
                        setSearch(event.currentTarget.value);
                    }}
                />
                <Combobox.Options>

                    <ScrollArea.Autosize mah={200} type="scroll">
                        {options}

                        {!exactOptionMatch && search.trim().length > 0 && (
                            <Combobox.Option value="$create">+ {search}</Combobox.Option>
                        )}

                        {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
                            <Combobox.Empty>Nothing found</Combobox.Empty>
                        )}
                    </ScrollArea.Autosize>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}
export default MultiInput;


// import { Button, Divider, RangeSlider, Collapse } from "@mantine/core";
// import MultiInput from "./MultiInput";
// import React, { useEffect, useState } from "react";
// import { dropdownData } from "../../Data/JobsData";
// import { useDispatch, useSelector } from "react-redux";
// import { updateFilter } from "../../Slices/FilterSlice";
// import { useDisclosure, useMediaQuery } from "@mantine/hooks";

// const SearchBar = () => {
//   const matches = useMediaQuery("(max-width: 768px)");
//   const filter = useSelector((state) => state.filter);
//   const [opened, { toggle }] = useDisclosure(false);
//   const dispatch = useDispatch();
//   const [value, setValue] = useState([0, 300]);

//   const handleChange = (event) => {
//     dispatch(updateFilter({ salary: event }));
//   };

//   useEffect(() => {
//     if (!filter.salary) setValue([0, 300]);
//   }, [filter]);

//   return (
//     <div className="w-full px-6 mt-5">
      
//       {/* MOBILE BUTTON */}
//       <div className="flex justify-end mb-3">
//         {matches && (
//           <Button onClick={toggle} variant="light" color="yellow">
//             {opened ? "Close Filters" : "Open Filters"}
//           </Button>
//         )}
//       </div>

//       {/* FILTER BOX */}
//       <Collapse in={opened || !matches}>
//         <div className="bg-mine-shaft-900 p-4 rounded-xl shadow-md flex flex-wrap gap-4">

//           {/* DROPDOWNS */}
//           {dropdownData.map((item, index) => (
//             <div key={index} className="w-[220px]">
//               <MultiInput
//                 title={item.title}
//                 icon={item.icon}
//                 options={item.options}
//               />
//             </div>
//           ))}

//           {/* SALARY */}
//           <div className="w-[220px] text-sm text-mine-shaft-300">
//             <div className="flex justify-between mb-1">
//               <div>Salary</div>
//               <div>
//                 ₹{value[0]} - ₹{value[1]} LPA
//               </div>
//             </div>

//             <RangeSlider
//               value={value}
//               onChange={setValue}
//               onChangeEnd={handleChange}
//               color="yellow"
//             />
//           </div>
//         </div>
//       </Collapse>
//     </div>
//   );
// };

// export default SearchBar;