import React, { useEffect, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../../theme/colors';
import { Stack, Image, Text, Box, VStack, Spinner, ZStack } from 'native-base';
import { icons } from '../icons';

type WelcomeSlideType = {
    key: string;
    title: string;
    subtitle: string;
    image: any;
};

const WelcomeScreen = () => {
    const [isLoading, setIsLoading] = useState(false);


    const _renderNextButton = () => (
        <Stack px={3}>
            <Box bg={colors.primary.FIRST} w={'24'} h={'12'} rounded={'xl'} alignItems={'center'} justifyContent={'center'}>
                <Text
                    color={colors.text.WHITE}
                    fontWeight={'bold'}
                    fontSize={['sm', 'xl', '2xl']}
                >
                    {('Siguiente')}
                </Text>
            </Box>
        </Stack>
    );

    const _renderDoneButton = () => (
        <Stack px={3}>
            <Box bg={colors.primary.FIRST} w={'24'} h={'12'} rounded={'xl'} alignItems={'center'} justifyContent={'center'}>
                <Text
                    color={colors.text.WHITE}
                    fontWeight={'bold'}
                    fontSize={['sm', 'xl', '2xl']}
                >
                    {('Empezar')}
                </Text>
            </Box>
        </Stack>
    );

    const _renderSkipButton = () => (
        <Stack px={3}>
            <Box bg={colors.primary.FIRST} w={'24'} h={'12'} rounded={'xl'} alignItems={'center'} justifyContent={'center'}>
                <Text
                    color={colors.text.WHITE}
                    fontWeight={'bold'}
                    fontSize={['sm', 'xl', '2xl']}
                >
                    {('skip')}
                </Text>
            </Box>
        </Stack>
    );

    const _renderPrevButton = () => (
        <Stack px={3}>
            <Box bg={colors.primary.FIRST} w={'24'} h={'12'} rounded={'xl'} alignItems={'center'} justifyContent={'center'}>
                <Text
                    color={colors.text.WHITE}
                    fontWeight={'bold'}
                    fontSize={['sm', 'xl', '2xl']}
                >
                    {('Atrás')}
                </Text>
            </Box>
        </Stack>
    );

    const RenderItem = ({ item }: { item: WelcomeSlideType }) => (
        <>
            <Box bg={colors.neutral.WHITE} py={12} px={6} safeArea alignItems={'center'}>
                <Box>
                    <ZStack alignItems="center">
                        <Box bg={colors.neutral.PINK} size={"380"} h={700} rounded={'2xl'} px={8} py={24}
                            mb={2}
                            shadow={1}
                        >
                            <Stack space={10} size={'full'} alignItems="center">
                                <Text
                                    color={colors.text.PRIMARY}
                                    bold
                                    textAlign={'center'}
                                    fontSize={'20'}
                                    lineHeight="xs"
                                >
                                    {(item.title)}
                                </Text>
                                <Image
                                    source={item.image}
                                    resizeMode="contain"
                                    alt="image"
                                />
                            </Stack>
                        </Box>
                        <Box bg={colors.primary.FIRST} w={'24'} h={'24'} rounded={'3xl'} alignItems={'center'} justifyContent={'center'} mt={-10}>
                            <Text color={colors.neutral.WHITE} fontSize={'4xl'} fontWeight={'bold'}
                            >
                                {(item.key)}
                            </Text>
                        </Box>
                    </ZStack>
                </Box>
            </Box>
        </>
    );

    return (
        <>
            {isLoading ? (
                <Box
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor={colors.neutral.WHITE}
                    h="full"
                >
                    <VStack
                        space={8}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {/* <Image
                            resizeMode="contain"
                            size={[20, 24, 40]}
                            source={icons.loginWallet}
                            alt="logo"
                        /> */}
                        <Spinner size="lg" color={colors.primary.SECOND} />
                    </VStack>
                </Box>
            ) : (

                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    // onDone={onDone}
                    showSkipButton={true}
                    showNextButton={true}
                    showPrevButton={true}
                    renderNextButton={_renderNextButton}
                    renderDoneButton={_renderDoneButton}
                    renderSkipButton={_renderSkipButton}
                    renderPrevButton={_renderPrevButton}
                    doneLabel={'Listo'}
                    // onSkip={onDone}
                    activeDotStyle={{
                        backgroundColor: colors.primary.FIRST,
                        width: 5,
                        height: 5,
                        marginBottom: -30
                    }}
                    dotStyle={{
                        backgroundColor: colors.primary.THIRD,
                        width: 5,
                        height: 5,
                        marginBottom: -30
                    }}
                />
            )}
        </>
    );
};

export default WelcomeScreen;

const slides: WelcomeSlideType[] = [
    {
        key: '1',
        title: 'Escanea el codigo QR desde tu celular',
        subtitle: 'transfers_secured2',
        image: icons.welcome1
    },
    {
        key: '2',
        title: 'En tu celular podras ver la ruta de evacuacion mas cercana.',
        subtitle: 'fasted_payments',
        image: icons.welcome2
    },
    {
        key: '3',
        title: 'Tambien puedes escanear imagenes como señales de evacuación, extintores, etc.',
        subtitle: 'stay_in_touch',
        image: icons.welcome3
    }
];
