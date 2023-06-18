import InputSearch from "../../components/InputSearch";
import { Header, HeaderText, PageContainer } from "./style";
import Feather from '@expo/vector-icons/Feather';

const Home = () => {
  return (
    <PageContainer>
      <Header>
        <HeaderText>
          fruits & vegetables
        </HeaderText>
        <Feather name='shopping-cart' size={24.0} />
      </Header>
      <InputSearch />
    </PageContainer>
  );
};

export default Home;
