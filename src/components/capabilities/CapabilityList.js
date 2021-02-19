import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Proto-Video',
      miniDescription: 'Prototipo para simular listas de videos por categorias con algunas funcionalidades para el uso del usuario.',
      link: 'https://aquilesallellillo.github.io/proto-video/#/',
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
