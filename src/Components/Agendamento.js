import React, {Component} from 'react';
import { Avatar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'

class Agendamento extends Component { 
    state = {
        data: "26/06/2019",
        hora: "13:00",
        endereco: "Rua Lorem Ipsum, 26" 
    }
    render(){
        const {data, hora, endereco, empresa } = this.props.agendamento
        return(
            <Card style={styles.card}>
                
                <Card.Content>
                <View style={styles.titlecontainer}>
                    <Title style={styles.title}>{empresa}</Title>
                    <Text style={styles.status}>Confirmado</Text>
                </View>
                

                <Paragraph>Data: {data} </Paragraph>
                <Paragraph>Hora: {hora}</Paragraph>
                <Paragraph>Endereço: {endereco}</Paragraph>
                </Card.Content>
                {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                <Card.Actions style={styles.actions}>
                <Button style={styles.detalhes}>Detalhes</Button>
                </Card.Actions>
            </Card>
        );
    }
}
export default Agendamento;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: "2%",
        marginBottom: "2%",
        width: "95%",
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "#13315C"
    },
    actions: {
        justifyContent: "flex-end",
    },
    titlecontainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        // alignItems: "stretch",
        width:"70%"
    },
    status: {
        color: "white",
        backgroundColor: "green",
        alignSelf: "center",
        padding: 5,
        borderRadius: 10
    },

})