 import React from 'react'
 import {SafeAreaView,Image, StyleSheet,  Text, View,FlatList } from 'react-native';
 import Feather from 'react-native-vector-icons/Feather';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from'../assets/color/colors.js';
 
 export default function Home() {
    const renderCategoryItem = ( {item} ) =>{
        return (
            <View
            style={[
              styles.categoryItemWrapper,
              {
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
              },]}>
                 <Image source={item.image} style={styles.categoryItemImage} />
                 <Text style={styles.categoryItemTitle}>{item.title}</Text>
                 <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={20}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
                 
            </View>
        )
    }
     return (
         <View style={styles.container}>
             <SafeAreaView>
               <View style={styles.headerWrapper}>
                <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
                <Feather name="menu" size={24} color={colors.textDark} />
               

               </View>
             </SafeAreaView>
             
             
             <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>E-Shop</Text>
          <Text style={styles.titlesTitle}>Gadget</Text>
        </View>
         {/* Search */}
         <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
          {/* Categories */}
          <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        <View style={styles.popularWrapper}>
            <Text  style={styles.popularTitle}> Popular </Text>
            {popularData.map((item) => (
                
                 <View style={
                    styles.popularCardWrapper}  >   
                       <View>
                         <View>
                         <View style={styles.popularTopWrapper}>
                       <MaterialCommunityIcons
                    name="crown"
                    size={20}
                    color={colors.yellow}
                  />
                <Text style={styles.popularTopText}>top of the week</Text>
                            </View>
                        </View>
                    </View>

                
             </View>
            ))}
           
        </View>
        

         </View>
         
         
     )
 }
 const styles= StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
      },
      titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
      },
      titlesSubtitle: {
         
        fontSize: 20,
        color: colors.textDark,
      },
      titlesTitle: {
         
        fontSize: 20,
        color: colors.textDark,
        marginTop: 5,
      },
      searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
      },
      search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
      },
      searchText: {
        
        fontSize: 20,
        marginBottom: 5,
        color: colors.textLight,
      },
      categoriesWrapper: {
        marginTop: 30,
      },
      categoriesTitle: {
      
        fontSize: 20,
        paddingHorizontal: 20,
      },
      categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
      },
      categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 8,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
      },
      categoryItemImage: {
        width: 55,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
      },
      categoryItemTitle: {
        textAlign: 'center',
       
        fontSize: 14,
        marginTop: 10,
      },
      categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
      },
      categorySelectIcon: {
        alignSelf: 'center',
      },
      popularWrapper: {
        paddingHorizontal: 20,
      },
      popularTitle: {
       
        fontSize: 20,
      },
      popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
     },
     popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      popularTopText: {
        marginLeft: 10,
       
        fontSize: 18,
      },
       
 });
 