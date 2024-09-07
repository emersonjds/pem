import { Alert, ScrollView, StyleSheet, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/Themed';
import { Button, ButtonText } from '@/components/ui/button';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '@/components/ui/actionsheet';
import React from 'react';
import { Divider } from '@/components/ui/divider';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Pressable } from '@/components/ui/pressable';

import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialIcons } from '@expo/vector-icons';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';



const CustomButton = ({ iconName, label, color }) => {
  return (
    <Pressable
      onPress={() => alert(`Navegar para ${label}`)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 120,
        elevation: 3, // Leve sombra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      {/* <Box mb={2}>
        <MaterialIcons name={iconName} size={32} color={color} />
      </Box> */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', color }}>{label}</Text>
    </Pressable>
  );
};

export default function TabOneScreen() {

  const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(false)


  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>
//     <View className='flex bg-gray-400 p-5'>

// <Center>
      
//         <Heading>Bem vindo ao PEM</Heading>
      
//     </Center>

//     <CustomButton iconName="report-problem" label="Denúncia" color="#FF6B6B" />


// <View className='mt-5 mb-5'>
// <Text className='text-center'>
//   Seu app para apoio a questões femininas
// </Text>
// </View>

// <Divider />

// <View className='mt-5 mb-5'>
//   <Text className='text-center'>
//     Veja os seviços que temos para você
//   </Text>
// </View>

//   <View className='mt-5 mb-5'>
//   <Pressable onPress={() => Alert.alert('Teste')} className="p-5 bg-green-800">
//   <Text className="text-typography-0">Press me</Text>
// </Pressable>
//   </View>

//       <Button onPress={() => setShowActionsheet(true)}>
//         <ButtonText>Open Actionsheet</ButtonText>
//       </Button>
//       <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
//         <ActionsheetBackdrop />
//         <ActionsheetContent>
//           <ActionsheetDragIndicatorWrapper>
//             <ActionsheetDragIndicator />
//           </ActionsheetDragIndicatorWrapper>
//           <ActionsheetItem onPress={handleClose}>
//             <ActionsheetItemText>Edit Message</ActionsheetItemText>
//           </ActionsheetItem>
//           <ActionsheetItem onPress={handleClose}>
//             <ActionsheetItemText>Mark Unread</ActionsheetItemText>
//           </ActionsheetItem>
//           <ActionsheetItem onPress={handleClose}>
//             <ActionsheetItemText>Remind Me</ActionsheetItemText>
//           </ActionsheetItem>
//           <ActionsheetItem onPress={handleClose}>
//             <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
//           </ActionsheetItem>
//           <ActionsheetItem isDisabled onPress={handleClose}>
//             <ActionsheetItemText>Delete</ActionsheetItemText>
//           </ActionsheetItem>
//         </ActionsheetContent>
//       </Actionsheet>
    
//     </View>

<SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
  <ScrollView
  >
      <View className="flex-1 justify-between px-4 h-full">
        <VStack space={6}>
          <CustomButton iconName="gavel" label="Delegacias Especializadas no Atendimento à Mulher (DEAM)" color="#FF6B6B" />
          <CustomButton iconName="phone" label="Central de Atendimento à Mulher - Ligue 180" color="#4CAF50" />
          <CustomButton iconName="home" label="Casa Abrigo para Mulheres em Situação de Violência" color="#2196F3" />
          <CustomButton iconName="baby" label="Programa Mãe Coruja Pernambucana" color="#FF9800" />
          <CustomButton iconName="business" label="Secretaria da Mulher de Pernambuco" color="#D32F2F" />
          <CustomButton iconName="lightbulb" label="Bora Empreender Mulher" color="#FF6B6B" />
          <CustomButton iconName="shield" label="Patrulha Maria da Penha" color="#4CAF50" />
          <CustomButton iconName="megaphone" label="Ouvidoria da Mulher" color="#2196F3" />
        </VStack>
      </View>
      </ScrollView>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
