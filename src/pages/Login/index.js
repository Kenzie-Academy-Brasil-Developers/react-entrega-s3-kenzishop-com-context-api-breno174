//import { FiUser, FiLock } from "react-icons/fi";
// HOOKS - yup, form, react, router
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
//material - UI
import TextField from "@mui/material/TextField";
//Styles
import { Container, Content, AnimationContainer, Botao } from "./styled";
import { toast } from "react-hot-toast";

function Login() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatorio")
      .email("email necessesário"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .min(6, "minimo de 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function login() {}

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(login)}>
            <h1>
              Book <span>Store</span>
            </h1>
            <div id="box">
              <TextField
                error={errors.email ? true : false}
                id="outlined-error"
                label="Login"
                helperText={errors.email ? "email invalido" : "  "}
                {...register("email")}
              />
              <TextField
                error={errors.password ? true : false}
                id="outlined-error"
                label="Senha"
                type="password"
                helperText={errors.password ? "senha invalida" : "  "}
                {...register("password")}
              />
              {/*<Button type="submit">Logar</Button>*/}
              <p>
                <i>
                  Seja bem vindo ao mundo aonde voce viaja sem sair do lugar!
                </i>
              </p>
            </div>
            <Botao type="submit">Login</Botao>
          </form>
          <Botao type="button" onClick={() => history.push("/")}>
            Voltar para loja
          </Botao>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Login;
