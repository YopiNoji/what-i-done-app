import { AppLoading, SplashScreen, Updates } from 'expo';
import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function AnimatedSplashScreen({ children, image }) {
    const animation = React.useMemo(() => new Animated.Value(1), []);
    const [isAppReady, setAppReady] = React.useState(false);
    const [isSplashAnimationComplete, setAnimationComplete] = React.useState(
      false
    );
  
    React.useEffect(() => {
      if (isAppReady) {
        Animated.timing(animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => setAnimationComplete(true));
      }
    }, [isAppReady]);
  
    const onImageLoaded = React.useMemo(() => async () => {
      SplashScreen.hide();
      try {
        // Load stuff
        await Promise.all([]);
      } catch (e) {
        // handle errors
      } finally {
        setAppReady(true);
      }
    });
  
    return (
      <View style={{ flex: 1 }}>
        {isAppReady && children}
        {!isSplashAnimationComplete && (
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: Constants.manifest.splash.backgroundColor,
                opacity: animation,
              },
            ]}>
            <Animated.Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: Constants.manifest.splash.resizeMode || 'contain',
                transform: [
                  {
                    scale: animation,
                  },
                ],
              }}
              source={image}
              onLoadEnd={onImageLoaded}
              fadeDuration={0}
            />
          </Animated.View>
        )}
      </View>
    );
  }