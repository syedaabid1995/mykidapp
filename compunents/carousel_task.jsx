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
    const images = [require('./assets/kids1.png'),
        require('./assets/kids2.jpg'),require('./assets/kids3.png')]
       
        
            return  (
                <View style={styles.container}>
                <PagerView
                    style={styles.pagerView}
                    initialPage={0}
                    onPageSelected={handlePageChange}
                    ref={pagerRef}
                >
                    {images.map((image, index) => (
                        <View key={index} style={styles.page}>
                            <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={image}
                            />
                        </View>
                    ))}
                </PagerView>
                <View style={styles.dotsContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
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