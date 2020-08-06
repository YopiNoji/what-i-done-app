import { AppLoading, SplashScreen, Updates } from 'expo';
import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import AnimatedSplashScreen from './AnimatedSplashScreen'
import { Asset } from 'expo-asset';

export default function AnimatedAppLoader({ children, image }) {
    const [isSplashReady, setSplashReady] = React.useState(false);

    const startAsync = React.useMemo(
        // If you use a local image with require(...), use `Asset.fromModule`
        () => () => Asset.fromURI(image).downloadAsync(),
        [image]
    );

    const onFinish = React.useMemo(() => setSplashReady(true), []);

    if (!isSplashReady) {
        return (
        <AppLoading
            startAsync={startAsync}
            onError={console.error}
            onFinish={onFinish}
        />
        );
    }

    return (
        <AnimatedSplashScreen image={image}>
        {children}
        </AnimatedSplashScreen>
    );
}