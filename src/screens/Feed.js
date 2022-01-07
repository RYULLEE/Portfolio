// feed screen

import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';

const Feed =({navigation}) => {
        return (
        <View style={styles.container}>
            <Text>This is the feed screen</Text>
           <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
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

export default Feed;