import { Box, Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../../components/Form";
import ProgressBar from "../../components/ProgressBar";
import TitleBar from "../../components/TitleBar";

const TestPage = () => {
  const quiz = [
    {
      title: "GAD",
      questions: [
        "Saya sering merasa gugup, gelisah, atau merasa terpojok",
        "Saya merasa sulit untuk menghentikan atau mengontrol kekhawatiran",
        "Saya sering merasa sangat khawatir tentang hal-hal yang berbeda",
        "Saya kesulitan untuk merasa rileks",
        "Saya sering merasa gelisah sehingga sulit untuk merasa diam",
        "Saya mudah terganggu atau marah",
        "Saya sering merasa takut jika sesuatu yang buruk mungkin terjadi",
      ],
    },
    {
      title: "PAD",
      questions: [
        "Saya pernah merasa takut yang berlebihan secara tiba tiba",
        "Saya merasa cemas, khawatir, atau gelisah jika akan mengalami panik yang berlebihan",
        "Saya pernah berpikir akan kehilangan kontrol, mati, menjadi gila, atau hal buruk lain akan terjadi karena panik",
        "Saya pernah merasa jantung berdebar, berkeringat, kesulitan bernapas, pingsan, atau gemetar",
        "Saya pernah merasa tegang, gelisah, kesulitan untuk tenang atau kesulitan untuk beristirahat",
        "Saya memilih untuk menghindari hal hal yang akan memicu serangan panik akan terjadi",
        "Saya meninggalkan situasi tertentu lebih awal atau berpartisipasi secara minimal karena panik",
        "Saya menghabiskan waktu untuk mempersiapkan atau menunda situasi tertentu yang akan memicu serangan panik",
        "Saya mendistraksi diri saya agar tidak berpikir tentang serangan panik",
        "Membutuhkan bantuan untuk mengatasi serangan panik (merokok, minum minuman beralkohol, atau orang lain)",
      ],
    },
    {
      title: "OCD",
      questions: [
        "Saya telah menyimpan banyak benda sehingga menghalangi jalan",
        "Saya mengecek beberapa hal lebih sering dari yang diperlukan",
        "Saya kesal ketika ada barang yang tidak teratur",
        "Saya merasa terpaksa berhitung ketika melakukan sesuatu",
        "Saya merasa kesulitan untuk menyentuh benda yang telah disentuh oleh orang asing atau orang tertentu",
        "Saya merasa kesulitan mengontrol pikiran saya",
        "Saya mengumpulkan barang yang tidak saya perlukan",
        "Saya berkali-kali mengecek pintu, jendela, lemari, dan lain-lain",
        "Saya merasa kesal ketika orang lain mengubah cara saya menata benda",
        "Saya merasa harus mengulang beberapa angka",
        "Saya terkadang merasa harus membersihkan diri karena merasa terkontaminasi",
        "Saya merasa kesal akan pikiran menyebalkan yang datang dan tidak sesuai dengan kemauan saya",
        "Saya menghindari membuang benda-benda karena saya takut akan membutuhkannya lagi",
        "Saya berulang kali mengecek kompor gas, keran air, dan saklar lampu setelah mematikannya",
        "Saya membutuhkan barang-barang untuk ditata sesuai dengan kemauan saya",
        "Saya merasa ada angka baik dan buruk",
        "Saya mencuci tangan lebih lama dan sering dari seharusnya",
        "Saya sering mendapat pikiran buruk dan tidak bisa menyingkirkannya",
      ],
    },
    {
      title: "PTSD",
      questions: [
        "Saya mengingat apapun yang membawa kembali perasaan tentang peristiwa tersebut.",
        "Saya mengalami kesulitan untuk tetap tertidur.",
        "Saya merasa hal - hal lain terus membuatku memikirkannya.",
        "Saya merasa kesal dan marah.",
        "Saya menghindari membiarkan diri saya marah ketika saya memikirkannya atau diingatkan tentang itu.",
        "Saya memikirkan peristiwa itu ketika saya tidak bermaksud.",
        "Saya merasa seolah - olah peristiwa itu tidak terjadi atau tidak nyata.",
        "Saya telah menjauh dari pengingat tentang situasinya.",
        "Bayangan dan gambar dari peristiwa itu muncul di benak saya.",
        "Saya menjadi gelisah dan mudah terkejut.",
        "Saya telah mencoba untuk tidak memikirkan situasinya.",
        "Saya sadar saya memiliki banyak perasaan tentang apa yang terjadi tetapi saya belum mengatasinya.",
        "Saya merasa cukup 'Mati rasa' tentang situasinya.",
        "Saya telah menemukan diri saya bertindak atau merasa seperti saya kembali pada peristiwa itu.",
        "Saya mengalami kesulitan tidur.",
        "Saya mengalami gelombang perasaan yang kuat tentang situasi.",
        "Saya telah mencoba untuk menghapus situasi itu dari ingatan saya.",
        "Saya kesulitan berkonsentrasi pada hal - hal yang harus saya lakukan.",
        "Saya mengalami reaksi fisik seperti berkeringat, jantung berdebar, serangan panik ketika mengingat peristiwa tersebut.",
        "Saya memiliki mimpi tentang situasi itu.",
        "Saya merasa waspada dan berjuang untuk bersantai.",
        "Saya mencoba untuk tidak membicarakan situasinya.",
      ],
    },
    {
      title: "SAD",
      questions: [
        "Saya takut pada orang yang berwenang",
        "Saya merasa terganggu saat muka saya memerah karena malu di depan publik",
        "Saya merasa takut dengan pesta dan acara sosial lainnya",
        "Saya menghindari orang yang tidak saya kenal",
        "Saya takut dikritik",
        "Saya menghindari melakukan sesuatu atau berbicara dengan orang lain karena takut dipermalukan",
        "Saya merasa tertekan saat berkeringat di depan orang",
        "Saya menghindari pergi ke pesta",
        "Saya menghindari aktivitas yang membuat saya menjadi pusat perhatian",
        "Saya takut berbicara dengan orang asing",
        "Saya menghindari memberikan pidato",
        "Saya akan melakukan apapun untuk menghindar kritikan",
        "Jantung berdebar-debar mengganggu saya ketika saya berada di sekitar orang-orang",
        "Saya takut melakukan sesuatu ketika orang mungkin dapat melihat saya",
        "Salah satu ketakutan terburuk saya adalah terlihat bodoh atau malu",
        "Saya menghindari berbicara dengan orang-orang yang berwenang",
        "Gemetar di depan orang lain membuatku sedih",
      ],
    },
  ];
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState();
  const nextPage = () => {
    setPage(page + 1);
    setProgress(progress + 100/quiz.length);
  };
  const prevPage = () => {
    setPage(page - 1);
    setProgress(progress - 100/quiz.length);
  };
  const handleChange = (e) => {
    setScore({
      ...score,
      [e.target.name]: e.target.value,
    });
    console.log(score);
  }
  return (
    <div>
      <TitleBar />
      <ProgressBar value={progress}/>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={2}
      >
        {quiz[page].questions.map((question, index) => (
          <Form key={index} question={question} handleChange={handleChange} name={quiz[page].title+index} />
        ))}
        <HStack spacing="24px">
          {page > 0 && (
            <Button
              colorScheme="teal"
              size="md"
              width="200px"
              my={8}
              onClick={prevPage}
            >
              Sebelumnya
            </Button>
          )}
          {page < quiz.length - 1 ? (
            <Button
              colorScheme="teal"
              size="md"
              width="200px"
              my={8}
              onClick={nextPage}
            >
              Berikutnya
            </Button>
          ) : (
            <Button
              colorScheme="teal"
              size="md"
              width="200px"
              my={8}
            >
              Lihat Hasil
            </Button>
          )}
        </HStack>
      </Box>
    </div>
  );
};

export default TestPage;
