import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SwipeableCards, BORDER_RADIUS } from 'react-native-pairs-swipeable-cards';

export default function Card() {
  const data = [
    {
      id: 'misono',
      isActive: true,
      name: '1번 프로젝트',
      age: 25,
      place: '神奈川県',
      rate: 64,
      tags: ['読書好き', '友達みたいな恋人が・・・', '気ままにドライブに行きたい!'],
      imageUri : require('../image/python.png'),
    },
    {
      id: 'arisa',
      isActive: false,
      name: '2번 프로젝트',
      age: 24,
      place: '福岡県',
      rate: 64,
      tags: ['読書好き', '友達みたいな恋人が・・・', '気ままにドライブに行きたい!'],
      imageUri : require('../image/python.png'),
    },
    
  ];
  return (
    <View style={styles.container}>
      <SwipeableCards
        data={data}
        onLike={() => console.log('いいね')}
        onSkip={() => console.log('スキップ!')}
        renderItem={(item, index) => (
          <ImageBackground
            key={`render_item_key_${index}`}
            source={{
              uri: item.imageUri,
            }}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingVertical: 16,
            }}
            imageStyle={{
              borderRadius: BORDER_RADIUS,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 25,
                  backgroundColor: item.isActive ? '#2cd26b' : '#cc0033',
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 32,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginRight: 10,
                }}
              >
                {`${item.age}歳`}
              </Text>
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginRight: 10,
                }}
              >
                {`${item.place}`}
              </Text>
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                {`♡${item.rate}%`}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
              }}
            >
              {item.tags.map(tag => (
                <View
                  key={`tag_${tag}`}
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 10,
                    borderRadius: 6,
                    marginRight: 6,
                    backgroundColor: '#ffffff',
                  }}
                >
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 8,
                      fontWeight: 'bold',
                    }}
                  >
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </ImageBackground>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});