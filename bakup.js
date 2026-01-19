import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../theme';
import { moderateScale } from '../../../../utils';
import PrimaryButton from '../../../../components/buttonPrimary';

const AmenitiesStep = ({ onNext, onBack }) => {
    return (
        <View>
            <View style={styles.headerRow}>
                <Text style={styles.subHeaderText}>Available Services</Text>
            </View>

            <View style={styles.radioBlock}>
                <Text style={styles.radioTitle}>Laundry</Text>
                <View style={styles.radioRow}>
                    <TouchableOpacity style={styles.radioItem}><View style={styles.radioCircle} /><Text style={styles.radioText}>Yes</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.radioItem}><View style={styles.radioCircle} /><Text style={styles.radioText}>No</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.radioBlock}>
                <Text style={styles.radioTitle}>Room Cleaning</Text>
                <View style={styles.radioRow}>
                    <TouchableOpacity style={styles.radioItem}><View style={styles.radioCircle} /><Text style={styles.radioText}>Yes</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.radioItem}><View style={styles.radioCircle} /><Text style={styles.radioText}>No</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.radioBlock}>
                <Text style={styles.radioTitle}>Warden Facility</Text>
                <View style={styles.radioRow}>
                    <TouchableOpacity style={styles.radioItem}><View style={styles.radioCircle} /><Text style={styles.radioText}>Yes</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.radioItem}><View style={styles.radioCircle} /><Text style={styles.radioText}>No</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.fullDivider} />

            <Text style={styles.sectionHeader}>More Amenities</Text>
            <View style={styles.badgeRow}>
                {['Free WIFI', 'Common TV', 'Lift', 'Cooking Allowed', 'Refrigerator', 'Bed', 'Other'].map(item => (
                    <TouchableOpacity key={item} style={styles.badge}><Text style={styles.badgeText}>{item}</Text></TouchableOpacity>
                ))}
            </View>

            <View style={styles.btnRow}>
                <PrimaryButton
                    title="Previous"
                    onPress={onBack}
                    bgColor={'#666'}
                    style={styles.halfBtn}
                />
                <PrimaryButton
                    title="Next"
                    onPress={onNext}
                    bgColor={COLORS.primary}
                    style={styles.halfBtn}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        marginBottom: moderateScale(20),
    },
    subHeaderText: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: COLORS.white,
    },
    sectionHeader: {
        fontSize: moderateScale(15),
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: moderateScale(12),
    },
    radioBlock: {
        marginBottom: moderateScale(15),
    },
    radioTitle: {
        fontSize: moderateScale(14),
        color: COLORS.white,
        marginBottom: moderateScale(8),
    },
    radioRow: {
        flexDirection: 'row',
        gap: 40,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    radioCircle: {
        width: moderateScale(18),
        height: moderateScale(18),
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#CCC',
    },
    radioText: {
        color: COLORS.white,
    },
    fullDivider: {
        height: 1,
        backgroundColor: '#333',
        marginVertical: moderateScale(20),
    },
    badgeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: moderateScale(20),
    },
    badge: {
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(8),
        borderWidth: 1,
        borderColor: '#555',
        marginRight: moderateScale(8),
        marginBottom: moderateScale(8),
    },
    badgeText: {
        fontSize: moderateScale(12),
        color: '#BBB',
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: moderateScale(10),
        marginTop: moderateScale(20),
        marginBottom: moderateScale(20),
    },
    halfBtn: {
        flex: 1,
        borderRadius: moderateScale(12),
    },
});

export default AmenitiesStep;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../../../theme';
import { moderateScale } from '../../../../utils';
import PrimaryButton from '../../../../components/buttonPrimary';

const GalleryStep = ({ onFinished, onBack }) => (
    <View>
        <View style={styles.headerRow}>
            <Text style={styles.subHeaderText}>Add Gallery</Text>
        </View>

        <TouchableOpacity style={styles.uploadArea}>
            <Icon name="camera" size={30} color={COLORS.tertioryGrey} />
            <Text style={styles.uploadText}>Upload PG Images</Text>
        </TouchableOpacity>

        <View style={styles.btnRow}>
            <PrimaryButton
                title="Previous"
                onPress={onBack}
                bgColor={'#666'}
                style={styles.halfBtn}
            />
            <PrimaryButton
                title="Finish"
                onPress={onFinished}
                bgColor={COLORS.primary}
                style={styles.halfBtn}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    headerRow: {
        marginBottom: moderateScale(20),
    },
    subHeaderText: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: COLORS.white,
    },
    uploadArea: {
        width: '100%',
        height: moderateScale(150),
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#888',
        borderRadius: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(10),
    },
    uploadText: {
        marginTop: moderateScale(10),
        color: '#AAA',
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: moderateScale(10),
        marginTop: moderateScale(20),
        marginBottom: moderateScale(20),
    },
    halfBtn: {
        flex: 1,
        borderRadius: moderateScale(12),
    },
});

export default GalleryStep;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../../../theme';
import { moderateScale } from '../../../../utils';
import PrimaryButton from '../../../../components/buttonPrimary';
import TextInput from '../../../../components/textInput';

const LocationStep = ({ onNext }) => {
    const [pgName, setPgName] = useState('');
    const [area, setArea] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');

    const [errors, setErrors] = useState({});

    const validate = () => {
        let isValid = true;
        const newErrors = {};

        if (!pgName.trim()) {
            newErrors.pgName = 'PG/Hostel Name is required';
            isValid = false;
        }
        if (!area.trim()) {
            newErrors.area = 'Area is required';
            isValid = false;
        }
        if (!address.trim()) {
            newErrors.address = 'Address is required';
            isValid = false;
        }
        if (!state.trim()) {
            newErrors.state = 'State is required';
            isValid = false;
        }
        if (!city.trim()) {
            newErrors.city = 'City is required';
            isValid = false;
        }
        if (!pincode.trim()) {
            newErrors.pincode = 'PIN Code is required';
            isValid = false;
        } else if (pincode.length < 6) {
            newErrors.pincode = 'Enter a valid 6-digit PIN Code';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNext = () => {
        if (validate()) {
            onNext();
        }
    };

    return (
        <View>
            <Text style={styles.sectionTitle}>Location Details</Text>

            <View style={styles.optionCard}>
                <TouchableOpacity style={styles.optionItem}>
                    <View style={styles.optionIconBg}>
                        <MaterialIcon name="crosshairs-gps" size={moderateScale(24)} color={COLORS.white} />
                    </View>
                    <View style={styles.optionTextSide}>
                        <Text style={styles.optionMainText}>Use Current Location</Text>
                        <Text style={styles.optionSubText}>Current Location</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.cardDivider} />
                <TouchableOpacity style={styles.optionItem}>
                    <View style={styles.optionIconBg}>
                        <Icon name="search" size={moderateScale(18)} color={COLORS.white} />
                    </View>
                    <View style={styles.optionTextSide}>
                        <Text style={styles.optionMainText}>Search Area</Text>
                        <Text style={styles.optionSubText}>Search any locality</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TextInput
                title="Name of PG/Hostel*"
                placeholder="Enter PG/Hostel Name"
                value={pgName}
                onChangeText={(text) => { setPgName(text); setErrors({ ...errors, pgName: '' }); }}
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.pgName && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
            />
            {errors.pgName && <Text style={styles.errorText}>{errors.pgName}</Text>}

            <TextInput
                title="Area*"
                placeholder="Enter area or Society name"
                value={area}
                onChangeText={(text) => { setArea(text); setErrors({ ...errors, area: '' }); }}
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.area && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
            />
            {errors.area && <Text style={styles.errorText}>{errors.area}</Text>}

            <TextInput
                title="Full Address*"
                placeholder="Enter full address"
                value={address}
                onChangeText={(text) => { setAddress(text); setErrors({ ...errors, address: '' }); }}
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.address && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
            />
            {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

            <View style={styles.row}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <TextInput
                        title="State *"
                        placeholder="Search a State"
                        value={state}
                        onChangeText={(text) => { setState(text); setErrors({ ...errors, state: '' }); }}
                        rightIcon={require('../../../../assets/icons/downArrow.png')}
                        inputContainerStyle={[styles.glassInput, errors.state && styles.errorBorder]}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        inputStyle={styles.inputText}
                        titleStyle={styles.inputTitle}
                        rightIconStyle={{ tintColor: COLORS.white }}
                    />
                    {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
                </View>
            </View>
            <View style={[styles.row, { marginTop: 15 }]}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <TextInput
                        title="City*"
                        placeholder="Select a City"
                        value={city}
                        onChangeText={(text) => { setCity(text); setErrors({ ...errors, city: '' }); }}
                        rightIcon={require('../../../../assets/icons/downArrow.png')}
                        inputContainerStyle={[styles.glassInput, errors.city && styles.errorBorder]}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        inputStyle={styles.inputText}
                        titleStyle={styles.inputTitle}
                        rightIconStyle={{ tintColor: COLORS.white }}
                    />
                    {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
                </View>
            </View>

            <TextInput
                title="PIN Code*"
                placeholder="Enter PIN Code"
                value={pincode}
                onChangeText={(text) => { setPincode(text); setErrors({ ...errors, pincode: '' }); }}
                keyboardType="number-pad"
                style={[styles.inputGap, { marginTop: 15 }]}
                inputContainerStyle={[styles.glassInput, errors.pincode && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
            />
            {errors.pincode && <Text style={styles.errorText}>{errors.pincode}</Text>}

            <PrimaryButton title="Save" onPress={handleNext} bgColor={COLORS.primary} style={styles.saveBtn} />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: moderateScale(15),
    },
    optionCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: moderateScale(25),
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(15),
    },
    optionIconBg: {
        width: moderateScale(45),
        height: moderateScale(45),
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(15),
    },
    optionTextSide: {
        flex: 1,
    },
    optionMainText: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: COLORS.white,
    },
    optionSubText: {
        fontSize: moderateScale(12),
        color: '#BBB',
    },
    cardDivider: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    inputGap: {
        marginBottom: moderateScale(15),
        width: '100%',
    },
    glassInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        borderRadius: moderateScale(12),
        height: moderateScale(55),
    },
    inputText: {
        color: COLORS.white,
        fontSize: moderateScale(15),
    },
    inputTitle: {
        color: COLORS.white,
        marginBottom: 5,
        fontWeight: '600',
    },
    saveBtn: {
        width: '100%',
        marginTop: moderateScale(20),
        borderRadius: moderateScale(12),
    },
    row: {
        flexDirection: 'row',
    },
    errorText: {
        color: 'red',
        fontSize: moderateScale(12),
        marginTop: moderateScale(-10),
        marginBottom: moderateScale(10),
        marginLeft: moderateScale(5),
    },
    errorBorder: {
        borderColor: 'red',
    },
});

export default LocationStep;import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { COLORS } from '../../../../theme';
import { moderateScale } from '../../../../utils';
import PrimaryButton from '../../../../components/buttonPrimary';
import TextInput from '../../../../components/textInput';

const PGDataStep = ({ onNext, onBack }) => {
    const [gender, setGender] = useState('Both');
    const [preferred, setPreferred] = useState('Both');
    const [food, setFood] = useState([]);
    const [rules, setRules] = useState([]);
    const [availableFrom, setAvailableFrom] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [description, setDescription] = useState('');

    const [errors, setErrors] = useState({});

    const toggleSelection = (list, setList, item) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    const validate = () => {
        let isValid = true;
        const newErrors = {};

        if (!availableFrom.trim()) {
            newErrors.availableFrom = 'Available Date is required';
            isValid = false;
        }
        if (!closingTime.trim()) {
            newErrors.closingTime = 'Closing Time is required';
            isValid = false;
        }
        if (!description.trim()) {
            newErrors.description = 'Description is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNext = () => {
        if (validate()) {
            onNext();
        }
    };

    return (
        <View>
            <View style={styles.headerRow}>
                <Text style={styles.subHeaderText}>PG Details</Text>
            </View>

            <Text style={styles.fieldLabel}>Select a Gender *</Text>
            <View style={styles.segmentRow}>
                {['Male', 'Female', 'Both'].map(item => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => setGender(item)}
                        style={[styles.segmentBtn, gender === item && styles.segmentBtnActive]}
                    >
                        <Text style={[styles.segmentText, gender === item && styles.segmentTextActive]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.fieldLabel}>Preferred Guests *</Text>
            <View style={styles.segmentRow}>
                {['Students', 'Professionals', 'Both'].map(item => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => setPreferred(item)}
                        style={[styles.segmentBtn, preferred === item && styles.segmentBtnActive]}
                    >
                        <Text style={[styles.segmentText, preferred === item && styles.segmentTextActive]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                title="Available From *"
                placeholder="Available Date"
                value={availableFrom}
                onChangeText={(text) => { setAvailableFrom(text); setErrors({ ...errors, availableFrom: '' }); }}
                rightIcon={require('../../../../assets/icons/downArrow.png')}
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.availableFrom && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
                rightIconStyle={{ tintColor: COLORS.white }}
            />
            {errors.availableFrom && <Text style={styles.errorText}>{errors.availableFrom}</Text>}

            <Text style={styles.fieldLabel}>Food Included *</Text>
            <View style={styles.badgeRow}>
                {['Breakfast', 'Lunch', 'Dinner', 'All Meals', 'No Meals'].map(item => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => toggleSelection(food, setFood, item)}
                        style={[styles.badge, food.includes(item) && styles.badgeActive]}
                    >
                        <Text style={[styles.badgeText, food.includes(item) && styles.badgeTextActive]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.fieldLabel}>PG/Hostel Rules *</Text>
            <View style={styles.badgeRow}>
                {['No Smoking', 'No Guardians Stay', 'No Girls/Boys Entry', 'No Drinking', 'No Non-Veg', 'Other'].map(item => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => toggleSelection(rules, setRules, item)}
                        style={[styles.badge, rules.includes(item) && styles.badgeActive]}
                    >
                        <Text style={[styles.badgeText, rules.includes(item) && styles.badgeTextActive]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.switchRow}>
                <Text style={styles.fieldLabel}>Gate Closing Time</Text>
                <Switch thumbColor={COLORS.white} trackColor={{ false: '#767577', true: COLORS.primary }} />
            </View>
            <TextInput
                placeholder="Closing Time"
                value={closingTime}
                onChangeText={(text) => { setClosingTime(text); setErrors({ ...errors, closingTime: '' }); }}
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.closingTime && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
            />
            {errors.closingTime && <Text style={styles.errorText}>{errors.closingTime}</Text>}

            <View style={styles.switchRow}>
                <Text style={styles.fieldLabel}>Is Rent Negotiable</Text>
                <Switch thumbColor={COLORS.white} trackColor={{ false: '#767577', true: COLORS.primary }} />
            </View>

            <TextInput
                title="Description"
                placeholder="Enter description"
                value={description}
                onChangeText={(text) => { setDescription(text); setErrors({ ...errors, description: '' }); }}
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.description && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
            />
            {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

            <View style={styles.btnRow}>
                <PrimaryButton
                    title="Previous"
                    onPress={onBack}
                    bgColor={'#666'}
                    style={styles.halfBtn}
                />
                <PrimaryButton
                    title="Next"
                    onPress={handleNext}
                    bgColor={COLORS.primary}
                    style={styles.halfBtn}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        marginBottom: moderateScale(20),
    },
    subHeaderText: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: COLORS.white,
    },
    fieldLabel: {
        fontSize: moderateScale(14),
        fontWeight: '700',
        color: COLORS.white,
        marginBottom: moderateScale(10),
    },
    segmentRow: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: moderateScale(8),
        marginBottom: moderateScale(20),
        overflow: 'hidden',
    },
    segmentBtn: {
        flex: 1,
        paddingVertical: moderateScale(12),
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    segmentBtnActive: {
        backgroundColor: '#333',
    },
    segmentText: {
        color: '#888',
        fontWeight: '600',
    },
    segmentTextActive: {
        color: COLORS.white,
    },
    inputGap: {
        marginBottom: moderateScale(15),
        width: '100%',
    },
    glassInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        borderRadius: moderateScale(12),
        height: moderateScale(55),
    },
    inputText: {
        color: COLORS.white,
        fontSize: moderateScale(15),
    },
    inputTitle: {
        color: COLORS.white,
        marginBottom: 5,
        fontWeight: '600',
    },
    badgeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: moderateScale(20),
    },
    badge: {
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(8),
        borderWidth: 1,
        borderColor: '#555',
        marginRight: moderateScale(8),
        marginBottom: moderateScale(8),
    },
    badgeActive: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    badgeText: {
        fontSize: moderateScale(12),
        color: '#BBB',
    },
    badgeTextActive: {
        color: COLORS.white,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: moderateScale(5),
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: moderateScale(10),
        marginTop: moderateScale(20),
        marginBottom: moderateScale(20),
    },
    halfBtn: {
        flex: 1,
        borderRadius: moderateScale(12),
    },
    errorText: {
        color: 'red',
        fontSize: moderateScale(12),
        marginTop: moderateScale(-10),
        marginBottom: moderateScale(10),
        marginLeft: moderateScale(5),
    },
    errorBorder: {
        borderColor: 'red',
    },
});

export default PGDataStep;import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../theme';
import { moderateScale } from '../../../../utils';
import PrimaryButton from '../../../../components/buttonPrimary';
import TextInput from '../../../../components/textInput';

const RoomDataStep = ({ onNext, onBack }) => {
    const [roomType, setRoomType] = useState('');
    const [occupancy, setOccupancy] = useState('');
    const [rent, setRent] = useState('');

    const [errors, setErrors] = useState({});

    const validate = () => {
        let isValid = true;
        const newErrors = {};

        if (!roomType.trim()) {
            newErrors.roomType = 'Room Type is required';
            isValid = false;
        }
        if (!occupancy.trim()) {
            newErrors.occupancy = 'Max Occupancy is required';
            isValid = false;
        }
        if (!rent.trim()) {
            newErrors.rent = 'Monthly Rent is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNext = () => {
        if (validate()) {
            onNext();
        }
    };

    return (
        <View>
            <View style={styles.headerRow}>
                <Text style={styles.subHeaderText}>Room Details</Text>
            </View>

            <TextInput
                title="Room Type"
                placeholder="Single Sharing"
                value={roomType}
                onChangeText={(text) => { setRoomType(text); setErrors({ ...errors, roomType: '' }); }}
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.roomType && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
            />
            {errors.roomType && <Text style={styles.errorText}>{errors.roomType}</Text>}

            <TextInput
                title="Max Occupancy"
                placeholder="1"
                value={occupancy}
                onChangeText={(text) => { setOccupancy(text); setErrors({ ...errors, occupancy: '' }); }}
                keyboardType="number-pad"
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.occupancy && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
            />
            {errors.occupancy && <Text style={styles.errorText}>{errors.occupancy}</Text>}

            <TextInput
                title="Monthly Rent"
                placeholder="Enter Amount"
                value={rent}
                onChangeText={(text) => { setRent(text); setErrors({ ...errors, rent: '' }); }}
                keyboardType="number-pad"
                style={styles.inputGap}
                inputContainerStyle={[styles.glassInput, errors.rent && styles.errorBorder]}
                placeholderTextColor="rgba(255,255,255,0.7)"
                inputStyle={styles.inputText}
                titleStyle={styles.inputTitle}
            />
            {errors.rent && <Text style={styles.errorText}>{errors.rent}</Text>}

            <View style={styles.btnRow}>
                <PrimaryButton
                    title="Previous"
                    onPress={onBack}
                    bgColor={'#666'}
                    style={styles.halfBtn}
                />
                <PrimaryButton
                    title="Next"
                    onPress={handleNext}
                    bgColor={COLORS.primary}
                    style={styles.halfBtn}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        marginBottom: moderateScale(20),
    },
    subHeaderText: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: COLORS.white,
    },
    inputGap: {
        marginBottom: moderateScale(15),
        width: '100%',
    },
    glassInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        borderRadius: moderateScale(12),
        height: moderateScale(55),
    },
    inputText: {
        color: COLORS.white,
        fontSize: moderateScale(15),
    },
    inputTitle: {
        color: COLORS.white,
        marginBottom: 5,
        fontWeight: '600',
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: moderateScale(10),
        marginTop: moderateScale(20),
        marginBottom: moderateScale(20),
    },
    halfBtn: {
        flex: 1,
        borderRadius: moderateScale(12),
    },
    errorText: {
        color: 'red',
        fontSize: moderateScale(12),
        marginTop: moderateScale(-10),
        marginBottom: moderateScale(10),
        marginLeft: moderateScale(5),
    },
    errorBorder: {
        borderColor: 'red',
    },
});

export default RoomDataStep;


