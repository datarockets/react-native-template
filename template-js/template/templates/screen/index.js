import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const {{ properCase name }}Screen = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}

const { string } = PropTypes

{{ properCase name }}Screen.propTypes = {
  text: string,
}

{{ properCase name }}Screen.defaultProps = {
  text: 'This Screen is generated by react-native-template.',
}

export default {{ properCase name }}Screen