import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    const Data = [
        {
            uid : 1,
            name:"Salman Khan",
            status: "No 1 Actor in Bollywood",
            imageUrl: 'https://imgeng.jagran.com/images/2023/oct/tigerthreetrailer1696400900313.jpg'
        },
        {
            uid : 2,
            name:"Ram Potenni",
            status: "No 1 Actor in Tollywood",
            imageUrl: 'https://telugucinema.com/wp-content/uploads/2021/05/ram-pothineni-linguswamy-1024x768.jpg'
        },
        {
            uid : 3,
            name:"Virat Kohli",
            status: "No 1 Cricketer in world",
            imageUrl: 'https://m.economictimes.com/thumb/height-450,width-600,imgsize-35766,msid-102676726/virat-kohli-2.jpg'
        },
        {
            uid : 4,
            name:"Cristino Ronaldo",
            status: "One of the Greatest Footballer",
            imageUrl: 'https://images.livemint.com/img/2022/11/25/600x338/FBL-WC-2022-MATCH15-POR-GHA-140_1669335533865_1669335533865_1669335544747_1669335544747.jpg'
        },
        {
            uid : 5,
            name:"Hitesh Chaudhary",
            status: "Most Lovable coder of this Era",
            imageUrl: 'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg'
        }
    ]
  return (
    <View>
      <Text style={Styles.headingText}>ContactList</Text>
      <ScrollView
      style={Styles.container}
      scrollEnabled={false}
      >
        {Data.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={Styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={Styles.userImage}
                />
                <View>
                <Text style={Styles.userName}>{name}</Text>
                <Text style={Styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}


export default ProfileScreen;

const Styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        paddingHorizontal:18,
        marginBottom:6,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:6,
        backgroundColor:'#8d3daf',
        borderRadius:12,
        elevation:5,
        padding:4,
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:30,
        marginRight:16,
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff',
    },
    userStatus:{
        fontSize:12,
    }
})