import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {ARKit} from 'react-native-arkit';

import styles from './camera-screen.styles';

function CameraScreen() {
  const arViewRef = useRef<ARKit>(null);
  const [node, setNode] = useState<React.ReactElement | null>(null);

  const onARViewCreated = () => {
    const node = (
      <ARKit.Box
        position={{x: 0, y: 0, z: -1}}
        shape={{width: 0.1, height: 0.1, length: 0.1}}
        material={{color: '#ff0000'}}
      />
    );
    setNode(node);
  };

  return (
    <View style={styles.container}>
      <ARKit
        ref={arViewRef}
        style={styles.preview}
        debug
        onARKitError={(error: any) => console.log(error)}
        onARViewCreated={onARViewCreated}>
        {node}
      </ARKit>
    </View>
  );
}

export default CameraScreen;
