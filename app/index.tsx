import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";

export default function EntryScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <View className="flex flex-1 items-center justify-center w-full p-5">
        <Image
          source={{
            uri: "https://www.pe.gov.br/wp-content/uploads/2023/08/GovPERGB.png",
          }}
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />

        <Text className="text-center text-2xl bold">Pernambuco Mulher</Text>

        <View className="mt-5 mb-5">
          <Text className="text-center color-gray-400">
            Tudo para a cidadã na palma da mão
          </Text>
        </View>
        {/* Botão de Logar que leva para as tabs */}
        <Link href="/(tabs)" asChild>
          <Button
            size="md"
            variant="solid"
            action="primary"
            style={{
              backgroundColor: "#1351b4",
              width: "100%",
              marginBottom: 10,
            }}
          >
            <ButtonText>Logar com GovBR</ButtonText>
          </Button>
        </Link>
        {/* Botão de Registrar */}
        <Link href="/(tabs)" asChild className="mt-2">
          <Button
            size="md"
            variant="solid"
            action="primary"
            style={{
              backgroundColor: "#6366f1",
              width: "100%",
            }}
          >
            <ButtonText>Logar de maneira anonima</ButtonText>
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
