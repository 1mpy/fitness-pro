import { getAuth, updateEmail } from 'firebase/auth'
import { Form, formData } from '../../../components/Forms/formFields'
import Logo from '../../../components/Logo/Logo'
import { changeEmail } from '../../../store/slices/userSlice'
import * as S from '../Auth.styles'
import { useState } from 'react'
import { IFormData } from '../../../types'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

type Props = {}

const ChangeLogin = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const auth = getAuth()
  const dispatch = useDispatch()
  const user = auth.currentUser
  const navigate = useNavigate()

  const handleChangeLogin = async (formData: IFormData) => {
    try {
      const newEmail = formData.login
      console.log('newEmail', newEmail)

      if (!user) {
        setErrorMessage('Пользователь не авторизован')
        return
      }

      try {
        await updateEmail(user, newEmail)
        dispatch(
          changeEmail({
            email: newEmail,
          }),
        )
        setErrorMessage('')
        navigate('/user')
      } catch (error) {
        console.error(error)
        setErrorMessage('Ошибка при смене логина')
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('Произошла ошибка')
    }
  }

  return (
    <S.AuthPageContainer>
      <S.ChangeLoginFormContainer>
        <Logo textColor="black" />
        <S.Inputs>
          <S.Description>Новый логин:</S.Description>
          <Form
            fields={formData.ChangeLoginForm.fields}
            title="Изменить логин"
            onSubmit={handleChangeLogin}
            buttonText="Сохранить"
            errorMessage={errorMessage}
          />
        </S.Inputs>
      </S.ChangeLoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default ChangeLogin
