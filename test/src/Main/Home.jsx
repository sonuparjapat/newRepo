import { Box, Button, ModalHeader, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BasicUsage } from './Modal/Modal'

export default function Home() {
  const [answerbutton, setAnswerbutton] = useState(false)
  const [staringopen, setStartingOpen] = useState(false)
  const [showValue, setShowValue] = useState(false)
  const [data, setData] = useState(["Please click on next..", "1. Kya", "2. App", "3. Jante", "4. Ho", "5. Is", "6. Duniya", "7. Me", "8. Sbse", "9. Khubsurat", "10. Smart", "11. Cool", "12. kon", "13. Hai"])
  const [count, setCount] = useState(0)
  const [valuetoshow, setValuetoShow] = useState(data[count])
  const [answer] = useState("5,6,7,8,9,10,11,2,13")
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    setValuetoShow(data[count])
  }, [count])

  const handlefunction = (value) => {
    if (count === data.length - 1) {
      setAnswerbutton(true)
    }
    if (value === 1 && !showValue) {
      setStartingOpen(true)
    } else {
      if (count < data.length - 1) {
        setCount(count + 1)
      }
    }
  }

  const handlestart = () => {
    setStartingOpen(false)
    setShowValue(true)
  }

  const startingmodalheader = (
    <>
      <ModalHeader>Starting Rules and Conditions.</ModalHeader>
    </>
  )

  const answermodalheader = (
    <>
      <ModalHeader>Answer of Your Game.</ModalHeader>
    </>
  )
  const startingmodalbody = (
    <>
      <p>
        Please note the number which will help to get your answer {" "}
        <span role="img" aria-label="pen">✏️</span>
      </p>
      <h4>Example: 1. Kya</h4>
      <p>Here you have to note the number like 1 is with what text...</p>
    </>
  )

  const answermodalbody = (
    <>
      <h3>{answer}</h3>
      <h4>Please combine all numbers with their respective text {" "}
        <span role="img" aria-label="brain">🧠</span>
      </h4>
      <h5>Eg: 1. I, 2. am, 3. good</h5>
      <p>So the final answer is: 1, 2, 3 ==> I am good {" "}
        <span role="img" aria-label="thumbs-up">👍</span>
      </p>
    </>
  )

  const answermodalfooter = (
    <>
      <Button colorScheme='blue' mr={3} onClick={() => {
        setStartingOpen(false)
        setShowValue(false)
        setValuetoShow(data[0])
        setShowAnswer(false)
        setCount(0)
      }}>
        Close
      </Button>
    </>
  )
  const startingmodalfooter = (
    <>
      <Button colorScheme='blue' mr={3} onClick={() => {
        setStartingOpen(false)
        setShowValue(false)
        setValuetoShow(data[0])
      }}>
        Close
      </Button>
      <Button variant='ghost' onClick={handlestart}>Start</Button>
    </>
  )

  const handleopen = () => { }

  const handlestartingopen = () => {
    setStartingOpen(true)
  }
  const handleansweropen = () => {
    setShowAnswer(true)
  }
  const handleclose = () => {
    setStartingOpen(false)
    setAnswerbutton(false)
    setShowValue(false)
    setCount(0)
    setValuetoShow(data[0])
    setShowAnswer(false)
  }
  const handleanswerclose = () => {
    setShowAnswer(false)
    setCount(0)
    setAnswerbutton(false)
    setValuetoShow(data[0])
  }

  return (
    <>
      <Box w={"100%"} margin={"auto"} mt={50} display={"flex"} justifyContent={"center"} flexWrap="wrap">
        <div style={{ margin: "10px" }}>
          <Button onClick={() => handlefunction(1)}>{showValue ? "NEXT" : "START"} {" "}
            <span role="img" aria-label="rocket">🚀</span>
          </Button>
        </div>
        {count === data.length - 1 ?
          <div style={{ margin: "10px" }}>
            <Button backgroundColor={"green"} onClick={() => setShowAnswer(true)} textColor={"white"}>
              GET ANSWER {" "}
              <span role="img" aria-label="target">🎯</span>
            </Button>
          </div> : ""}
        <div style={{ margin: "10px" }}>
          <Button isDisabled={count >= 1 ? false : true} backgroundColor={"red"} onClick={() => {
            setCount(0)
            setShowAnswer(false)
            setValuetoShow(data[0])
          }} textColor={"white"}>
            Restart {" "}
            <span role="img" aria-label="refresh">🔄</span>
          </Button>
        </div>
      </Box>
      <Box textAlign="center" mt="20px" fontSize="20px">
        {showValue ? (
          <>
            <span role="img" aria-label="star">⭐️</span>
            <span style={{ marginLeft: "5px", marginRight: "5px",fontWeight:"bold" }}>{valuetoshow}</span>
            <span role="img" aria-label="star">⭐️</span>
          </>
        ) : ""}
      </Box>
      {staringopen ? <BasicUsage openModal={staringopen} closeModal={setStartingOpen} setShowValue={setShowValue} modalheader={startingmodalheader} modalbody={startingmodalbody} modalfooter={startingmodalfooter} handleopen={handlestartingopen} handleclose={handleclose} /> : ""}
      {showAnswer ? <BasicUsage openModal={showAnswer} closeModal={setShowAnswer} setShowValue={setShowValue} modalheader={answermodalheader} modalbody={answermodalbody} modalfooter={answermodalfooter} handleopen={handleansweropen} handleclose={handleanswerclose} /> : ""}
    </>
  )
}