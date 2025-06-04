import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';

const Dropdown = (props) => {
    const { dropDownValue } = props
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Good', value: 'Good' },
        { label: 'Dangerous/unsafe', value: 'Dangerous/unsafe' },
        { label: 'Average', value: 'Average' },
    ]);

    useEffect(() => {
        dropDownValue(value)
    }, [value])

    return (
        <View style={{}}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select condition"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
            />
        </View>
    );
};

export default Dropdown;
