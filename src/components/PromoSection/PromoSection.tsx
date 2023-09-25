import React from 'react'
import * as S from './PromoSection.styles'

type Props = {}

const PromoSection = (props: Props) => {
  return (
    <section>
      <S.ContentWrapper>
        <S.PromoSubtitle>Онлайн-тренировки для занятий дома</S.PromoSubtitle>
        <S.PromoTitle>
          Начните заниматься спортом и улучшите качество жизни
        </S.PromoTitle>
        <S.PromoSticker>
          <span>Измени своё тело за полгода</span>
        </S.PromoSticker>
      </S.ContentWrapper>
    </section>
  )
}

export default PromoSection