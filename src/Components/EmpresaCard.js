import React from 'react'
import { Avatar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'


const  EmpresaCard = (props) => { 

    const { nome, endereco } = props.empresa
    return(
        <Card style={styles.card}>
            
            <Card.Content>
            <View style={styles.titlecontainer}>
                <Title style={styles.title}>{nome}</Title>
            </View>
            

            <Paragraph>{endereco}</Paragraph>
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Card.Actions style={styles.actions}>
            <Button style={styles.detalhes}>Detalhes</Button>
            </Card.Actions>
        </Card>
    );
}

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

export default EmpresaCard;