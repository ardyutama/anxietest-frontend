import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ResultBar from '../../components/ResultBar'
import ResultDetail from '../../components/ResultDetail'

const ResultPage = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mt="50px">
        <Heading as='h1' size='lg' color="black" textAlign="center">Hasil Tes Anda</Heading>
        <Box textAlign="center" display="flex" flexDirection="column" height="500px" justifyContent="space-around" width="50%" paddingX="170px" paddingY="20px" border="1px solid #ccc" mt="20px">
          <ResultBar score="80" value="Sangat Berat">Post Traumatic Disorder</ResultBar>
          <ResultBar score="80" value="Sangat Berat">Obsessive Compulsive Disorder</ResultBar>
          <ResultBar score="80" value="Sangat Berat">Social Anxiety Disorder</ResultBar>
          <ResultBar score="80" value="Sangat Berat">Generalized Anxiety Disorder</ResultBar>
          <ResultBar score="80" value="Sangat Berat">Panic Disorder</ResultBar>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" mt="50px">
        <Box
          as='button'
          width="36px"
          height="36px"
          mr="10px"
          lineHeight='1.2'
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          border='1px'
          px='8px'
          borderRadius='32px'
          fontSize='14px'
          fontWeight='bold'
          bg='#6257E2'
          color='white'
          _hover={{ bg: '#ACA5FD' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
        >
        >
        </Box>
        <Text>Lihat Penjelasan Hasil</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt="50px">
        <ResultDetail />
        <ResultDetail />
        <ResultDetail />
        <ResultDetail />
      </Box>
    </>
  )
}

export default ResultPage