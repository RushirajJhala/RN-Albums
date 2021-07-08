import React from 'react';
import {Text, View, Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({album}) => {
    const {name,image } = album
    console.log(image)
    return (
        <Card>
            <CardSection>
                <View style= {styles.thumbnailContainerStyle} >
                    <Image source={{ uri: 'https://loremflickr.com/cache/resized/65535_51070124663_01afa21407_300_300_nofilter.jpg'} } style={styles.thumbnailImageStyle} ></Image>
                </View>
                <View style={styles.textContainer} >
                    <Text>{name}</Text>
                    <Text>{name}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: 'https://loremflickr.com/cache/resized/65535_51070124663_01afa21407_300_300_nofilter.jpg'} } style={styles.imageStyle} ></Image>
            </CardSection>
            <CardSection>
                <Button onPress= { () => Linking.openURL(image)} >
                    Buy now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    textContainer : {
        flexDirection : 'column',
        justifyContent: 'space-around'
    },
    thumbnailImageStyle : {
        height: 50,
        width: 50
    },
    imageStyle : {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail; 