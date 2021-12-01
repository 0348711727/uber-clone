import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import config from "../../config";

// const cityAvailable = [ 'Aguada', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Barceloneta', 'Caguas', 'California', 'Carolina', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Dorado', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', '']
export default function SearchBar({ cityHandler }) {

    return (
        <View style={styles.searchBar}>
            <GooglePlacesAutocomplete
                query={{ key: `123` }}
                onPress={(data, details = null) => {
                    // console.log(data.description)
                    const city = data.description.split(",")[0]
                    cityHandler(city)
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 30,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 7 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        marginRight: 10,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        borderRadius: 30,
                        alignItems: 'center',
                        padding: 10
                    }} >
                        <AntDesign name="clockcircle" size={15} style={{ marginRight: 5 }} />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    searchBar: {
        marginTop: 15,
        flexDirection: 'row'
    },

})