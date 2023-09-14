import { useState } from 'react'



const App = () => {
  const analects = [
    '子曰：「學而時習之，不亦說乎？有朋自遠方來，不亦樂乎？人不知而不慍，不亦君子乎？」',
    '有子曰：「其為人也孝弟，而好犯上者，鮮矣；不好犯上，而好作亂者，未之有也。君子務本，本立而道生。孝弟也者，其為仁之本與！」',
    '子曰：「巧言令色，鮮矣仁！」',
    '曾子曰：「吾日三省吾身：為人謀而不忠乎？與朋友交而不信乎？傳不習乎？」',
    '子曰：「道千乘之國：敬事而信，節用而愛人，使民以時。」',
    '子曰：「弟子入則孝，出則弟，謹而信，汎愛眾，而親仁。行有餘力，則以學文。」',
    '子夏曰：「賢賢易色，事父母能竭其力，事君能致其身，與朋友交言而有信。雖曰未學，吾必謂之學矣。」',
    '子曰：「君子不重則不威，學則不固。主忠信，無友不如己者，過則勿憚改。」',
    '曾子曰：「慎終追遠，民德歸厚矣。」',
    '子禽問於子貢曰：「夫子至於是邦也，必聞其政，求之與？抑與之與？」子貢曰：「夫子溫、良、恭、儉、讓以得之。夫子之求之也，其諸異乎人之求之與？」'
  ]

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0)

  const handleAnalectClick = () => {
    const min = 0;
    const max = 9;
    const rand = Math.floor(Math.random() * 10)
    console.log(rand)
    setSelected(rand);
  }

  const handleVoteClick = (props) => {
    console.log('Selected: ', props)
    console.log('Votes: ', votes)
    const updatedVotes = [...votes]
    console.log('updatedVotes: ', updatedVotes)
    updatedVotes[props] += 1
    console.log('updatedVotes cell after increment: ', updatedVotes[props])
    setVotes(updatedVotes)
    console.log(votes)
  }

  return (
  <div>
    <p>{analects[selected]}</p>
    <button onClick={handleAnalectClick}>Next analect</button>
    <button onClick={() => handleVoteClick(selected)}>Vote for this analect</button>
    <p>Votes: {votes[selected]}</p>
  </div>
  )
}

export default App
