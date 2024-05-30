import * as React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Colors from 'src/styles/colors'

interface Props {
  size?: number
  color?: string
  style?: ViewStyle
  testID?: string
}

export default function Logo({ style, size = 32, color = Colors.black, testID }: Props) {
  return (
    <View testID={testID} style={[styles.container, style]}>
      <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.8357 3.77618C44.7624 2.67682 42.5534 1.79935 40.2403 1.17541L31.9758 9.44093L31.9752 9.44156V18.6385L31.9758 18.6379L46.8357 3.77618Z"
          fill={color}
        />
        <Path
          d="M18.7713 61.0729L18.7713 2.89817C16.4022 3.96991 14.1873 5.32258 12.1691 6.9137L12.1691 57.0574C14.1872 58.6485 16.4022 60.0012 18.7713 61.0729Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.6275 18.0615C61.6693 20.2062 62.4779 22.4851 63.0204 24.8652L55.8865 32L63.015 39.1294C62.471 41.5082 61.661 43.7858 60.6181 45.9291L46.6907 32L60.6275 18.0615Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.4692 7.58289C54.1298 8.98344 55.6455 10.5504 56.9905 12.2581L37.2509 32L56.9777 51.7292C55.6317 53.436 54.115 55.0019 52.4536 56.4014L31.9758 35.9212L31.9752 35.9206V28.0794L31.9758 28.0788L52.4692 7.58289Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.2175 62.8018C42.5318 62.1794 44.7421 61.3032 46.8168 60.2049L31.9758 45.3621L31.9752 45.3615V54.5584L31.9758 54.5591L40.2175 62.8018Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.3736 63.2244L25.3736 0.746648C27.4831 0.307572 29.6691 0.0767936 31.9089 0.0767936L31.9313 0.0768007L31.9563 0.0768273L31.9758 0.0768619V9.44093V18.6379V28.0788V35.9212V45.3621V54.5591V63.8942C31.9535 63.8943 31.9312 63.8943 31.9089 63.8943C29.669 63.8943 27.4831 63.6635 25.3736 63.2244Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.56685 49.9985L5.56686 13.9726C2.0547 19.0989 0 25.3023 0 31.9855C0 38.6688 2.0547 44.8722 5.56685 49.9985Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.56686 13.9726C2.0547 19.0989 0 25.3023 0 31.9855C0 38.6688 2.0547 44.8722 5.56685 49.9985L5.56686 13.9726ZM60.6181 45.9291C61.661 43.7858 62.471 41.5082 63.015 39.1294L55.8865 32L63.0204 24.8652C62.4779 22.4851 61.6693 20.2062 60.6275 18.0615L46.6907 32L60.6181 45.9291ZM56.9777 51.7292L37.2509 32L56.9905 12.2581C55.6455 10.5504 54.1298 8.98344 52.4692 7.58289L31.9758 28.0788V18.6379L46.8357 3.77618C44.7624 2.67682 42.5534 1.79935 40.2403 1.17541L31.9758 9.44093V0.0768619L31.9563 0.0768273L31.9313 0.0768007L31.9089 0.0767936C29.6691 0.0767936 27.4831 0.307572 25.3736 0.746648L25.3736 63.2244C27.4831 63.6635 29.669 63.8943 31.9089 63.8943C31.9312 63.8943 31.9535 63.8943 31.9758 63.8942V54.5591L40.2175 62.8018C42.5318 62.1794 44.7421 61.3032 46.8168 60.2049L31.9758 45.3621V35.9212L52.4536 56.4014C54.115 55.0019 55.6317 53.436 56.9777 51.7292Z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowColor: 'rgba(46, 51, 56, 0.15)',
  },
})