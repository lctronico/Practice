import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  updateDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCAV3yRbHAvaCjf8j22v9ahYf2kAp9OK0w",
    authDomain: "sistema-de-creditos-462ad.firebaseapp.com",
    projectId: "sistema-de-creditos-462ad",
    storageBucket: "sistema-de-creditos-462ad.appspot.com",
    messagingSenderId: "836832069866",
    appId: "1:836832069866:web:0944d736c570668da8ef93"
  }

  // init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'clientes')

// // queries
// const q = query(colRef, orderBy('createdAt'))

// realtime collection data


// adding docs

onSnapshot(colRef, (snapshot) => {
  let books = []
  snapshot.docs.forEach(doc => {
    books.push({ ...doc.data(), id: doc.id })
  })
  console.log(books)
})

const addBookForm = document.querySelector('.container1')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    name: addBookForm.name.value,
    lname: addBookForm.lname.value,
    idnum: addBookForm.idnum.value,
    address: addBookForm.address.value,
    city: addBookForm.city.value,
    cel: addBookForm.cel.value,
    email: addBookForm.email.value,
    dob: addBookForm.dob.value,
    ocupation: addBookForm.ocupation.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    addBookForm.reset()
  })
})


   //collection ref
const colRefNew = collection(db, 'prestamos')
  
  // adding prestamos
  const addPrestamo = document.querySelector('.container2')

    addPrestamo.addEventListener('submit', (e) => {
      e.preventDefault()
  
  addDoc(colRefNew, {
    user: addPrestamo.user.value,
    //idtype: addPrestamo.idtype.value,
    monto: addPrestamo.monto.value,
    tasa: addPrestamo.tasa.value,
    fechapagos: addPrestamo.fechapagos.value,
    periodos: addPrestamo.periodos.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    addPrestamo.reset()
  })
})

// realtime collection data
onSnapshot(colRefNew, (snapshot) => {
    let prestamo = []
    snapshot.docs.forEach(doc => {
    prestamo.push({ ...doc.data(), id: doc.id })
    })
    console.log(prestamo)
  })