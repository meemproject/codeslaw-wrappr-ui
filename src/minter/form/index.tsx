import React from 'react'
import { StoreT } from '../types'
import { MdOutlineArrowBack } from 'react-icons/md'

type Props = {
  store: StoreT
  setStore: React.Dispatch<React.SetStateAction<StoreT>>
  setView: React.Dispatch<React.SetStateAction<number>>
}

interface Form {
  heading: string
  component: React.ReactNode
}

export default function Form({ store, setStore, setView }: Props) {
  const choice = store?.juris + store?.entity
  console.log('store', store, choice)

  const form: { [key: string]: Form } = {
    deLLC: {
      heading: 'Delaware LLC',
      component: <LLC />,
    },
    wyLLC: {
      heading: 'Wyoming LLC',
      component: <LLC />,
    },
    deUNA: {
      heading: 'Delaware UNA',
      component: <UNA />,
    },
    wyUNA: {
      heading: 'Wyoming UNA',
      component: <UNA />,
    },
    lexCharter: {
      heading: 'LexPunk Charter',
      component: <Charter />,
    },
    orCharter: {
      heading: 'Orange Charter',
      component: <Charter />,
    },
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{form[choice]['heading']}</h1>
        <IconButton
          variant="ghost"
          maxWidth={1}
          colorScheme={'brand'}
          onClick={() => setView(0)}
          aria-label="Go back!"
          icon={<MdOutlineArrowBack />}
          isRound
        />
      </div>
    </div>
  )
}

import LLC from './LLC'
import Charter from './Charter'
import UNA from './UNA'
import { IconButton } from '@chakra-ui/react'
