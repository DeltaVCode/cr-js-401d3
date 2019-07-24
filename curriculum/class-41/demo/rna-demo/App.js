import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);

  const showContacts = async () => {
    if (!hasPermission) {
      const { status } = await Permissions.askAsync(Permissions.CONTACTS);
      setHasPermission(status === 'granted');
      if (status !== 'granted') return;
    }

    const contacts = await Contacts.getContactsAsync();
    setContacts(contacts.data);
  }

  phoneCall = contact => {
    let phoneNumber = contact.phoneNumbers[0].number; // .replace(/[^\d]/g, '');
    console.log(phoneNumber);

    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(() => Linking.openURL(link))
      .catch(console.error);
  }

  return (
    <View style={styles.container}>
      <Text>DeltaV is almost done (for most of you)!</Text>
      <Button title="Load Contacts" onPress={showContacts} />
      {hasPermission === false && <Text>Contacts Permissions Required</Text>}

      {/*
      <View>
        {contacts.map((contact, idx) => (
          <Text key={idx}>{contact.name}</Text>
        ))}
      </View>
       */}

       <View>
         <Text>FlatList...</Text>
         <FlatList
          data={contacts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Button title={item.name}
              onPress={() => phoneCall(item)} />
          )} />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
