import React, { Component } from 'react';
import { View, Text, Platform, SectionList, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from 'cryptoTracker/src/res/colors';


class CoinsSearch extends Component {

    state = {
        query: ""
    }

    handleText = (query) => {
        this.setState({ query });

        if (this.props.onChange) {
            this.props.onChange(query);
        }
    }

    render() {

        const { query } = this.state;

        return (
            <TextInput
                style={[
                    styles.textInput,
                    Platform.OS == 'ios' ? styles.textInputIOS : styles.textInputAndroid
                ]}
                onChangeText={this.handleText}
                value={query}
                placeholder="Search coin"
                placeholderTextColor="#fff"
                val
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 46,
        backgroundColor: Colors.charade,
        paddingLeft: 16,
        color: "#fff",
        fontSize: 20
    },
    textInputAndroid: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.zircon
    },
    textInputIOS: {
        margin: 8,
        borderRadius: 8
    }
})

export default CoinsSearch;