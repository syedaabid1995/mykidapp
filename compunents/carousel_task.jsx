import { View,Image, StyleSheet} from "react-native";
import { useState,useRef } from "react";
import PagerView from 'react-native-pager-view';

export default function CarouselTask() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pagerRef = useRef(null);

    const handlePageChange = (event) => {
        const newIndex = event.nativeEvent.position;
        setCurrentIndex(newIndex);
    };
    const images = [{key: 1, value:  require('./assets/kids1.png')},
        {key: 2, value:  require('./assets/kids2.jpg')},
        {key: 3, value:  require('./assets/kids3.png')}
    ]
       
        
            return  (
                <View style={styles.container}>
                <PagerView
                    style={styles.pagerView}
                    initialPage={0}
                    onPageSelected={handlePageChange}
                    ref={pagerRef}
                >
                    {images.map((item, index) => (
                        <View key={index} style={styles.page}>
                            <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={item.value}
                            />
                        </View>
                    ))}
                </PagerView>
                <View style={styles.dotsContainer}>
                {images.map((item, index) => (
                    <View
                        key={item.key}
                        style={[
                            styles.dot,
                            { width: currentIndex === index ? 50 : 10 }
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pagerView: {
        flex: 1,
    },
    page: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    dot: {
        height: 10,
        backgroundColor: 'red',
        margin: 10,
    },
});