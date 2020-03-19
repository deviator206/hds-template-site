import React from 'react';
import {
    View,
    Text, 
    Button

} from 'react-native';
import appStyle from './appStyle';
export default DashboardComponent = (props) => {
    const _onPressButton1 = () => {
        props.history.push("/dash/a")
    }

    const _onPressButton2 = () => {
        props.history.push("/dash/b")
    }
    return (
        <React.Fragment>
            <View style={{ width: "100%", height: 80, flexDirection: 'row' }} >
                <Text style={appStyle.labelStyle}>
                    DASHBOARD
                 </Text>
                <View style={appStyle.buttonContainer} >
                    <Button title="B1" color="#841584" onPress={_onPressButton1} />
                </View>
                <View style={appStyle.buttonContainer} >
                    <Button title="B2" color="#841584" onPress={_onPressButton2} />
                </View>

               


            </View>

        </React.Fragment>
    );
}

