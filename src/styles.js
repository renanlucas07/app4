import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
});

module.exports = styles;
