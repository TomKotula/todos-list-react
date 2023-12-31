import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import SectionList from "./SectionList";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejsc na reacta", done: false },
  { id: 2, content: "zjesc kolacje", done: true },
]

const hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header title="TO-DO list" />
      <Main>
        <Form />
        <Section title="TO-DO list" extraSectionContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />} />
      </Main>
      <SectionList>
        <Tasks tasks={tasks} hideDoneTask={hideDoneTask} />
      </SectionList>
    </Container>
  );
}

export default App;
