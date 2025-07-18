/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ready Player Me (https://sketchfab.com/readyplayerme)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/ready-player-me-male-avatar-vrchatgame-f3a7ba3f857646598120cd195348cae6
Title: Ready Player Me male avatar | VRChat/Game
*/

import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef()

  const { nodes, materials } = useGLTF('/models/avatar/male_avatar.glb')

  const {animations:idleAnimation} = useFBX('/models/avatar/idle.fbx')

  const {animations:headspinAnimation} = useFBX('/models/avatar/headspin.fbx')
  
  const {animations:danceAnimation} = useFBX('/models/avatar/dance.fbx')
  
  const {animations:dance2Animation} = useFBX('/models/avatar/dance2.fbx')

  idleAnimation[0].name = 'idle';
  headspinAnimation[0].name = 'headspin';
  danceAnimation[0].name = 'dance';
  dance2Animation[0].name = 'dance2';

  const { actions } = useAnimations([idleAnimation[0]], headspinAnimation[0], danceAnimation[0], dance2Animation[0], group)

  useEffect(() => {
    actions[animationName].reset().fadein(0.5).play()

    return () => actions[animationName].fadeOut(0.5)
  }, [animationName])

  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_74.geometry}
          material={materials.Wolf3D_Avatar}
          skeleton={nodes.Object_74.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/avatar/male_avatar.glb')

export default Developer