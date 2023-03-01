import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../types';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



export type ContactListItemProps = {
    user: User;
}



const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();


    const onClick = () => {
        // navigate to chat room with this user 
    }





    return (

        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatars} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text numberOfLines={1} style={styles.status}>{user.status}</Text>
                    </View>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

export default ContactListItem;
