import React from 'react';
import {

    View,
    Text, TextInput,
    Button

} from 'react-native';

import appStyle from './appStyle';

export default LoginComponent = (props) => {

    const _onPressButton = () => {
        props.navigation.navigate('Home')
      }
    return (
        <React.Fragment>
            <View style={appStyle.singleFormElement} >
                <Text style={appStyle.labelStyle}>
                    User Name
            </Text>
                <TextInput
                    style={appStyle.inputStyle}
                    placeholder="User Name"
                />
            </View>

            <View style={appStyle.singleFormElement} >
                <Text style={appStyle.labelStyle}>
                    Password
            </Text>
                <TextInput
                    style={appStyle.inputStyle}
                    placeholder="Password"
                />
            </View>

            <View style={appStyle.buttonContainer} >
               <Button title="Login" color="#841584" onPress={_onPressButton}  />
            </View>

        </React.Fragment>
    );
}

