import React, {Component} from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet} from 'react-native'

class Agendamento extends Component { 
    render(){
        return(
            <Card style={styles.card}>
                
                <Card.Content>
                <Title>Agendamento: Renato</Title>
                <Title>Agendamento: Renato</Title>
                <Paragraph>Dia: 06/06/2019</Paragraph>
                <Paragraph>Hora: 13h</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
        marginTop: "5%",
        width: "95%",
        alignSelf: "center"
    },
    actions: {
        justifyContent: "center",
        flexDirection: "row"
    },
    detalhes: {
        alignSelf: "flex-end"
    }
})