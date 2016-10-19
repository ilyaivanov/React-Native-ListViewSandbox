import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';

export default class ListViewSandbox extends Component {
    render() {
        let items = [];
        for (var i = 0; i < 400; i++) {
            items.push(i);
        }

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let renderRow = (i) => <Text>Item {i}</Text>;
        return (
            <View>
                <ListView dataSource={ds.cloneWithRows(items)} renderRow={renderRow}>
                </ListView>
            </View>
        );
    }
}