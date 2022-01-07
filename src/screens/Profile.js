// Profile screen

import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';

const Profile = ({navigation}) => {
        return (
        
        <View style={styles.container}>
            <Text>This is the profile screen</Text>
            <Button
                title="Go to Feed1111122111111111"
                onPress={() => navigation.navigate('Feed')}
            />
            

        </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Profile;