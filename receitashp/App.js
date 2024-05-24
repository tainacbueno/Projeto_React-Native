import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Vibration,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

class Nav2 extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Receitas" component={Receitas} />
        <Stack.Screen name="varinhaPretzel" component={varinhaPretzel} />
        <Stack.Screen name="pumpkinShake" component={pumpkinShake} />
        <Stack.Screen name="tontonguetoffee" component={tontonguetoffee} />
        <Stack.Screen name="butterbeer" component={butterbeer} />
        <Stack.Screen name="diabinhospimenta" component={diabinhospimenta} />
      </Stack.Navigator>
    );
  }
}

class Receitas extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={estilos.titulos}>
          {'Qual destas comidas mágicas deseja preparar hoje?\n\n'}
        </Text>
        <Button
          title="Varinha de Pretzel"
          onPress={() => {
            this.props.navigation.navigate('varinhaPretzel');
            Vibration.vibrate();
          }}></Button>

        <Button
          title="Milkshake de Abóbora"
          onPress={() => {
            this.props.navigation.navigate('pumpkinShake');
            Vibration.vibrate();
          }}></Button>

        <Button
          title="Caramelo Incha-Língua"
          onPress={() => {
            this.props.navigation.navigate('tontonguetoffee');
            Vibration.vibrate();
          }}></Button>

        <Button
          title="Cerveja Amanteigada"
          onPress={() => {
            this.props.navigation.navigate('butterbeer');
            Vibration.vibrate();
          }}></Button>

          <Button
          title="Diabinhos de Pimenta"
          onPress={() => {
            this.props.navigation.navigate('diabinhospimenta');
            Vibration.vibrate();
          }}></Button>
      </View>
    );
  }
}

class varinhaPretzel extends React.Component {
  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <Image
          style={estilos.logo}
          source={require('/assets/pretzelwand.jpg')}
        />
        <Text style={estilos.titulos}>
          {'\nVarinha de Pretzel\n\nIngredientes:'}
        </Text>
        <Text style={estilos.texto}>
          {
            '\n -1 embalagem de bombons cobertos com chocolate (pode ser substituída por uma embalagem de gotas de chocolate) \n -1 pacote de rolinhos longos de pretzel \n -Granulado decorativo sortido (quanto mais variados, melhor)'
          }
        </Text>
        <Text style={estilos.titulos}>{'\nModo de preparo:'}</Text>
        <Text style={estilos.texto}>
          {
            '\n -1º passo: Ponha os bombons numa bacia que possa ir ao forno microondas. Coloque a bacia no micro-ondas, e aqueça no calor máximo por vinte e cinco segundos. \n -2º passo: Tire a bacia do micro-ondas, e usando uma colher, mexa o chocolate. \n -3º passo: Repita os passos um e dois até o chocolate derreter completamente. Isso vai precisar de várias tentativas. \n -4º passo: Com o chocolate derretido, pegue um rolinho de pretzel, e cubra uns dois dedos da ponta com chocolate. Existem várias formas de se fazer, a mais fácil é mergulhar a ponta do rolinho direto na bacia, ou ter uma colher com a qual você possa passar e espalhar o chocolate. \n -5º passo: Adicione o granulado a sua escolha à superfície do chocolate. \n -6º passo: Coloque a varinha numa folha de papel manteiga, e ponho para esfriar até que o chocolate tenha endurecido. \n -7º passo: Repita até que você tenha feito o número desejado de varinhas! \n\nOBS: Essa receita faz parte de uma série de atividades para festa! Se você está planejando fazê-la em grupo, não esqueça de separar os granulados em potinhos, para tornar a decoração mais fácil!'
          }
        </Text>
      </ScrollView>
    );
  }
}

class pumpkinShake extends React.Component {
  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <Image
          style={estilos.logo}
          source={require('/assets/pumpkinshake.jpeg')}
        />
        <Text style={estilos.titulos}>
          {'\nMilkshake de Abóbora\n\nIngredientes:'}
        </Text>
        <Text style={estilos.texto}>
          {
            '\n-1 banana, descascada e congelada \n -3 colheres de sopa de suco de laranja concentrado \n -3 colheres de sopa de purê de abóbora \n -1 bola de sorvete de baunilha \n -1/3 xícara de água ou leite (cremoso) \n -Creme chantilly (opcional) \n -Canela (opcional)'
          }{' '}
        </Text>
        <Text style={estilos.titulos}>{'\nModo de preparo:'}</Text>
        <Text style={estilos.texto}>
          {
            '\n -1º passo: Corte a banana congelada em pedaços pequenos e ponha todos os ingredientes na batedeira. \n - 2º passo: Bata na velocidade máxima até se tornar uma mistura homogênea. \n - 3º passo: Despeje em dois copos compridos, decore com o chantilly e salpique a canela. Sirva enquanto estiver frio!'
          }
        </Text>
      </ScrollView>
    );
  }
}

class tontonguetoffee extends React.Component {
  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <Image
          style={estilos.logo}
          source={require('/assets/tontonguetoffee.jpg')}
        />
        <Text style={estilos.titulos}>
          {'\nCaramelo Incha-Língua\n\nIngredientes:'}
        </Text>
        <Text style={estilos.texto}>
          {
            '\n-2 xícaras de açúcar \n -8 colheres de sopa de manteiga \n -½ colher de chá de extrato de baunilha (ou parecido) \n -1 ½ xícara de água \n -Além disso, é necessário um termômetro culinário'
          }
        </Text>
        <Text style={estilos.titulos}>{'\nModo de preparo:'}</Text>
        <Text style={estilos.texto}>
          {
            '\n -1º passo: Numa panela média, misture todos os ingredientes e mantenha em fogo médio até o açúcar estar completamente dissolvido. \n -2º passo: Sem parar de mexer, ferva até a mistura atingir 145°C no seu termômetro culinário. \n -3º passo: Despeje a mistura numa fôrma 23 x 30,5 cm untada com óleo ou manteiga e deixe esfriar até que esteja quase firme ao tocar. \n -4º passo: Divida a superfície em quadrados de 5,1cm com uma faca afiada, mas não corte completamente. \n -5º passo: Depois de frio, quebre em pedaços (isso seria mais fácil se o caramelo fosse dividido da forma correta). \n -6º passo: Divirta-se! Rende 570g de caramelo.'
          }
        </Text>
      </ScrollView>
    );
  }
}

class butterbeer extends React.Component {
  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <Image
          style={estilos.logo}
          source={require('/assets/butterbeer.jpg')}
        />
        <Text style={estilos.titulos}>
          {'\nCerveja Amanteigada\n\nIngredientes:'}
        </Text>
        <Text style={estilos.texto}>
          {
            '\n -1 xícara (240 ml) de água tônica ou água tônica sabor baunilha \n -1/2 xíxara (120 ml) de xarope de *butterscotch (cobertura para sorvete) \n -1/2 colher de sopa de manteiga'
          }
        </Text>
        <Text style={estilos.titulos}>{'\nModo de preparo:'}</Text>
        <Text style={estilos.texto}>
          {
            '\n -1º passo: Coloque o xarope e a manteiga em um copo que comporte 480 ml. Aqueça no microondas em temperatura alta de 1 a 1 minuto e meio, ou até que o xarope comece a borbulhar e a manteiga tenha se misturado completamente. \n -2° passo: Mexa e deixe esfriar por 30 segundos, então misture com a água tônica devagar. A mistura irá efervescer um pouquinho. \n -3° passo: Sirva em duas canecas de café ou em dois copos pequenos, uma delícia quentinha de Hogwarts, perfeita para dois!'
          }
        </Text>
      </ScrollView>
    );
  }
}

class diabinhospimenta extends React.Component {
    render() {
    return (
      <ScrollView style={{margin: 10}}>
      <Image style={estilos.logo} source={require('/assets/diabinhospimenta.jpg')}/>
      <Text style={estilos.titulos}>{"\nDiabinhos de Pimenta\n\nIngredientes:"}</Text>
      <Text style={estilos.texto}>{"\n -1 lata de leite condensado \n -1/2 xícara de óleo de pimenta \n -4 xícaras (chá) de chocolate ao leite picado"}</Text>
      <Text style={estilos.titulos}>{"\nModo de preparo:"}</Text>
      <Text style={estilos.texto}>{"\n -1º passo: Misture o leite condensado e o óleo até que forme uma massa e reserve.\n -2º passo: Seguindo as técnicas de chocolate (derretimento, choque térmico), pegue a fôrma pequena para bombom, faça a casquinha do diabinho e leve a geladeira. \n -3º passo: Tire, recheie, cubra com chocolate e leve novamente à geladeira. \n -4º passo: Desenforme, deixe suar e embrulhe em papel chumbo."}</Text>
    </ScrollView>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Receitas"
            component={Nav2}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home-account"
                  color={color}
                  size={size}
                />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const estilos = StyleSheet.create({
  texto: {
    textAlign: 'left',
    textAlignmentsVertical: 'center',
    color: 'purple',
    fontSize: 18,
  },
  titulos: {
    textAlign: 'center',
    textAlignmentsVertical: 'center',
    color: 'coral',
    fontSize: 20,
  },
  logo: {
    resizeMode: 'contain',
  },
});

export default App;
