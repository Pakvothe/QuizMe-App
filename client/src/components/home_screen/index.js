import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { getQuizzes } from '@redux/reducers/quizzes';

//==> Components
import QuizCards from '@components/utils/QuizCards';
import ScrollCategory from '@components/utils/ScrollCategory';
import ButtonPpal from '@components/utils/ButtonPpal';

//==> Styles
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { ThemeProvider } from 'styled-components/native';

//==>Assets
import strings from './strings';

const HomeScreen = ({ navigation }) => {
	const { info: user } = useSelector((state) => state.user);
	const { theme, language } = useSelector((state) => state.global);
	const { quizzes, categories } = useSelector((state) => state.quiz);
	const dispatch = useDispatch();
	const s = strings[language];

	const handleSelect = () => {};

	useEffect(() => {
		dispatch(getQuizzes());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<Header>
					<HeaderButton
						onPress={() => navigation.navigate('UserMenu')}
					>
						<Icon
							name='ios-menu-outline'
							color={theme.primary}
							size={28}
						/>
					</HeaderButton>
					<StyledText style={{ fontSize: 20, color: theme.primary }}>
						QuizMeApp
					</StyledText>
					<HeaderButton>
						<Icon
							name='ios-search-outline'
							color={theme.primary}
							size={28}
						/>
					</HeaderButton>
				</Header>
				<IntroContainer>
					<IntroImg
						source={{ uri: 'https://picsum.photos/100/100' }}
					/>
					<IntroTitle>
						¡{s.title} {user.firstName} {user.lastName} !
					</IntroTitle>
					<IntroText>{s.introTitle}</IntroText>
				</IntroContainer>
				<ButtonPpal
					string={s.createQuiz}
					nav='QuizMake'
					navigation={navigation}
				/>
				<View>
					<SelectorContainer>
						<SelectorButton>
							<SelectorText>{s.selector1}</SelectorText>
						</SelectorButton>
						<SelectorButton>
							<SelectorText>{s.selector2}</SelectorText>
						</SelectorButton>
					</SelectorContainer>
					<QuizCards navigation={navigation} quizzes={quizzes} />
				</View>
				<CategoryContainer>
					<CategoryImg
						source={{ uri: 'https://picsum.photos/75/75' }}
					/>
					<CategoryTitle>{s.search}</CategoryTitle>
				</CategoryContainer>
				<View>
					<ScrollCategory
						categories={categories}
						handleSelect={handleSelect}
					/>
				</View>
				<CategoryContainer>
					<CategoryImg
						source={{ uri: 'https://picsum.photos/75/75' }}
					/>
					<CategoryTitle>{s.find}</CategoryTitle>
				</CategoryContainer>
				<ButtonPpal
					string={s.randomButton}
					nav='QuizIndex'
					navigation={navigation}
				/>
				<BottomBar>
					<StyledText style={{ fontSize: 20, color: theme.primary }}>
						QuizMeApp
					</StyledText>
				</BottomBar>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const StyledText = styled.Text`
	color: ${(props) => props.theme.text};
`;
const Header = styled.View`
	width: 95%;
	align-self: center;
	height: 65px;
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;

const HeaderButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`;

const IntroContainer = styled.View`
	height: 300px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	margin: 50px 0;
`;

const IntroImg = styled.Image`
	z-index: 3;
	height: 150px;
	width: 150px;
	border-radius: 100px;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => props.theme.primary};
`;

const IntroText = styled.Text`
	text-align: center;
	padding: 0 10px;
	max-width: 95%;
	align-self: center;
	color: ${(props) => props.theme.text};
`;

const SelectorContainer = styled.View`
	width: 95%;
	align-self: center;
	margin-top: 10px;
	flex-direction: row;
`;

const SelectorButton = styled.TouchableOpacity`
	width: 50%;
	height: 65px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	border-top-width: 1px;
	border-top-color: #ccc;
	align-items: center;
	justify-content: center;
`;

const SelectorText = styled.Text`
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
`;

const CategoryContainer = styled.View`
	height: 150px;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	margin: 20px 0;
`;

const CategoryImg = styled.Image`
	z-index: 3;
	height: 75px;
	width: 75px;
	border-radius: 10px;
`;

const CategoryTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => props.theme.text};
`;

const BottomBar = styled.View`
	width: 95%;
	align-self: center;
	height: 50px;
	padding: 10px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	border-top-width: 1px;
	border-top-color: #ccc;
`;
export default HomeScreen;
