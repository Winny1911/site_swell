// FIRST FORM DEVSECOPS JAVA
const filedevSecopsJava = document.querySelector("#arquivoDevSecopsJava"); 
// const curriculumDevSecopsJava = document.querySelector(".arquivo__picture"); 
const choiceArchive = "Escolha o arquivo";
// const arquivoText = "Selecione seu arquivo...";
// curriculumDevSecopsJava.innerHTML = arquivoText;
const message = document.getElementById("tamanhoExcedido");

filedevSecopsJava.addEventListener("change", function (e) {
  e.preventDefault();
  const inputTarget = e.target;
  const file = inputTarget.files[0];
  if (file) {
    const reader = new FileReader();
    if (file.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumDevSecopsJava.innerHTML = file.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(file);
  } else {
    curriculumDevSecopsJava.innerHTML = choiceArchive;
  }
});

// envio Http do formulário por email
function EnviarForm(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
          showModal();
          // $("#success").html("<div class='alert alert-success' onclick='showModal'></div>");
          $(":input#arquivo__input").val("");
          $(":input#emailpessoaDevSecopsJava").val("");
          document.querySelector(".arquivo__picture").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#success").html("");
          }, 2000);
        } else {
          $("#success").html(
            "<div class='alert alert-danger'>" + oReq.responseText + "</div>"
          );
          $(":input#arquivo__input").val("");
          $(":input#emailpessoaDevSecopsJava").val("");
          document.querySelector(".arquivo__picture").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#success").html("");
          }, 2000);
        }
      } else {
        showModal();
        // $("#success").html("<div class='alert alert-danger'>Erro HTTP:"+oReq.status+"</div>");
        $(":input#arquivo__input").val("");
        $(":input#emailpessoaDevSecopsJava").val("");
        document.querySelector(".arquivo__picture").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#success").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document.getElementById("contactForm").addEventListener("submit", EnviarForm);

function toggleButtonJava() {
  const arquivo = document.querySelector("#arquivoDevSecopsJava").value;
  const email = document.querySelector("#emailpessoaDevSecopsJava").value;
  if (arquivo && email) {
    document.querySelector("#buttonJava").disabled = false;
    return;
  } else {
    document.querySelector("#buttonJava").disabled = true;
  }
}

// THREETH FORM
const inputEmail = document.querySelector("#emailpessoaDevAndroid");
const fileDevAndroid = document.querySelector("#arquivoDevAndroid");
const curriculumDevAndroid = document.querySelector(".arquivo-devAndroid");
curriculumDevAndroid.innerHTML = arquivoText;

fileDevAndroid.addEventListener("change", function (ele) {
  ele.preventDefault();
  const inputTargetDevAndroid = ele.target;
  const fileDevAndroid = inputTargetDevAndroid.files[0];
  if (fileDevAndroid) {
    const reader = new FileReader();
    if (fileDevAndroid.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumDevAndroid.innerHTML = fileDevAndroid.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileDevAndroid);
  } else {
    curriculumDevAndroid.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarFormAndroid(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
          showModal();
          // $("#android").html(
          //   "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoDevAndroid").val("");
          $(":input#emailpessoaDevAndroid").val("");
          document.querySelector(".arquivo-devAndroid").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#android").html("");
          }, 2000);
        } else {
          $("#android").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoDevAndroid").val("");
          $(":input#emailpessoaDevAndroid").val("");
          document.querySelector(".arquivo-devAndroid").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#android").html("");
          }, 2000);
        }
      } else {
        $("#android").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoDevAndroid").val("");
        $(":input#emailpessoaDevAndroid").val("");
        document.querySelector(".arquivo-devAndroid").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#android").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formAndroid")
  .addEventListener("submit", enviarFormAndroid);


function toggleButtonAndroid() {
  const arquivo = document.querySelector("#arquivoDevAndroid").value;
  const email = document.querySelector("#emailpessoaDevAndroid").value;
  if (arquivo && email) {
    document.querySelector("#buttonAndroid").disabled = false;
  } else {
    document.querySelector("#buttonAndroid").disabled = true;
  }
}

// FOURTH FORM DESENVOLVEDOR IOS
const fileDevIos = document.querySelector("#arquivoDevIos");
const curriculumDevIos = document.querySelector(".arquivo-devIos");
curriculumDevIos.innerHTML = arquivoText;

fileDevIos.addEventListener("change", function (el) {
  el.preventDefault();
  const inputTargetDevIos = el.target;
  const fileDevIos = inputTargetDevIos.files[0];
  if (fileDevIos) {
    const reader = new FileReader();
    if (fileDevIos.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumDevIos.innerHTML = fileDevIos.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileDevIos);
  } else {
    curriculumDevIos.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarFormIos(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
           showModal();
          // $("#desenvolvedorIOS").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoDevIos").val("");
          $(":input#emailpessoaDevIos").val("");
          document.querySelector(".arquivo-devIos").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#desenvolvedorIOS").html("");
          }, 2000);
        } else {
          $("#desenvolvedorIOS").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoDevIos").val("");
          $(":input#emailpessoaDevIos").val("");
          document.querySelector(".arquivo-devIos").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#desenvolvedorIOS").html("");
          }, 2000);
        }
      } else {
        $("#desenvolvedorIOS").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoDevIos").val("");
        $(":input#emailpessoaDevIos").val("");
        document.querySelector(".arquivo-devIos").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#desenvolvedorIOS").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formPessoaIOS")
  .addEventListener("submit", enviarFormIos);

function toggleButtonIos() {
  const arquivo = document.querySelector("#arquivoDevIos").value;
  const email = document.querySelector("#emailpessoaDevIos").value;
  if (arquivo && email) {
    document.querySelector("#buttonIos").disabled = false;
    return;
  } else {
    document.querySelector("#buttonIos").disabled = true;
  }
}

// FIFTH FORM
const fileDevFrontEnd = document.querySelector("#arquivoDevFrontEnd");
const curriculumDevFrontEnd = document.querySelector(".arquivo-devFrontEnd");
curriculumDevFrontEnd.innerHTML = arquivoText;

fileDevFrontEnd.addEventListener("change", function (e) {
  e.preventDefault();
  const inputTargetFrontEnd = e.target;
  const fileDevFrontEnd = inputTargetFrontEnd.files[0];
  if (fileDevFrontEnd) {
    const reader = new FileReader();
    if (fileDevFrontEnd.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumDevFrontEnd.innerHTML = fileDevFrontEnd.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileDevFrontEnd);
  } else {
    curriculumDevFrontEnd.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarFormFrontend(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
           showModal();
          // $("#frontend").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoDevFrontEnd").val("");
          $(":input#emailpessoaDevFrontEnd").val("");
          document.querySelector(".arquivo-devFrontEnd").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#frontend").html("");
          }, 2000);
        } else {
          $("#frontend").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoDevFrontEnd").val("");
          $(":input#emailpessoaDevFrontEnd").val("");
          document.querySelector(".arquivo-devFrontEnd").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#frontend").html("");
          }, 2000);
        }
      } else {
        $("#frontend").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoDevFrontEnd").val("");
        $(":input#emailpessoaDevFrontEnd").val("");
        document.querySelector(".arquivo-devFrontEnd").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#frontend").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}

document
  .getElementById("formFrontEnd")
  .addEventListener("submit", enviarFormFrontend);

function toggleButtonFrontend() {
  const arquivo = document.querySelector("#arquivoDevFrontEnd").value;
  const email = document.querySelector("#emailpessoaDevFrontEnd").value;
  if (arquivo && email) {
    document.querySelector("#buttonFrontend").disabled = false;
    return;
  } else {
    document.querySelector("#buttonFrontend").disabled = true;
  }
}

// FOURTH FORM Estrutura Mainframe
const fileMainframe = document.querySelector(
  "#arquivoEspecialistaInfraMainframe"
);
const curriculumMainframe = document.querySelector(
  ".arquivo-EspecialistaInfraMainframe"
);
curriculumMainframe.innerHTML = arquivoText;

fileMainframe.addEventListener("change", function (el) {
  el.preventDefault();
  const inputTargetMainframe = el.target;
  const fileMainframe = inputTargetMainframe.files[0];
  if (fileMainframe) {
    const reader = new FileReader();
    if (fileMainframe.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumMainframe.innerHTML = fileMainframe.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileMainframe);
  } else {
    curriculumMainframe.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarFormMainframe(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
           showModal();
          // $("#mainframe").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoEspecialistaInfraMainframe").val("");
          $(":input#emailpessoaEspecialistaInfraMainframe").val("");
          document.querySelector(
            ".arquivo-EspecialistaInfraMainframe"
          ).innerHTML = "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#mainframe").html("");
          }, 2000);
        } else {
          $("#mainframe").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoEspecialistaInfraMainframe").val("");
          $(":input#emailpessoaEspecialistaInfraMainframe").val("");
          document.querySelector(
            ".arquivo-EspecialistaInfraMainframe"
          ).innerHTML = "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#mainframe").html("");
          }, 2000);
        }
      } else {
        $("#mainframe").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoEspecialistaInfraMainframe").val("");
        $(":input#emailpessoaEspecialistaInfraMainframe").val("");
        document.querySelector(
          ".arquivo-EspecialistaInfraMainframe"
        ).innerHTML = "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#mainframe").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formIfra")
  .addEventListener("submit", enviarFormMainframe);

function toggleButtonInfraMainframe() {
  const arquivo = document.querySelector(
    "#arquivoEspecialistaInfraMainframe"
  ).value;
  const email = document.querySelector(
    "#emailpessoaEspecialistaInfraMainframe"
  ).value;
  if (arquivo && email) {
    document.querySelector("#buttonEspecialistaInfra").disabled = false;
    return;
  } else {
    document.querySelector("#buttonEspecialistaInfra").disabled = true;
  }
}

// FOURTH FORM Programador Sap
const fileProgramadorSap = document.querySelector(
  "#arquivoEspecialistaProgramadorSAP"
);
const curriculumProgramadorSap = document.querySelector(
  ".arquivo-especialistaProgramadorSAP"
);
curriculumProgramadorSap.innerHTML = arquivoText;

fileProgramadorSap.addEventListener("change", function (el) {
  el.preventDefault();
  const inputTargetProgramadorSap = el.target;
  const fileProgramadorSap = inputTargetProgramadorSap.files[0];
  if (fileProgramadorSap) {
    const reader = new FileReader();
    if (fileProgramadorSap.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumProgramadorSap.innerHTML = fileProgramadorSap.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileProgramadorSap);
  } else {
    curriculumProgramadorSap.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarProgramadorSap(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
           showModal();
          // $("#programadorSap").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoEspecialistaProgramadorSAP").val("");
          $(":input#emailpessoaespecialistaProgramadorSAP").val("");
          document.querySelector(
            ".arquivo-especialistaProgramadorSAP"
          ).innerHTML = "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#programadorSap").html("");
          }, 2000);
        } else {
          $("#programadorSap").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoEspecialistaProgramadorSAP").val("");
          $(":input#emailpessoaespecialistaProgramadorSAP").val("");
          document.querySelector(
            ".arquivo-especialistaProgramadorSAP"
          ).innerHTML = "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#programadorSap").html("");
          }, 2000);
        }
      } else {
        $("#programadorSap").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoEspecialistaProgramadorSAP").val("");
        $(":input#emailpessoaespecialistaProgramadorSAP").val("");
        document.querySelector(
          ".arquivo-especialistaProgramadorSAP"
        ).innerHTML = "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#programadorSap").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formProgramadorSap")
  .addEventListener("submit", enviarProgramadorSap);

function toggleButtonProgramadorSAP() {
  const arquivo = document.querySelector(
    "#arquivoEspecialistaProgramadorSAP"
  ).value;
  const email = document.querySelector(
    "#emailpessoaespecialistaProgramadorSAP"
  ).value;
  if (arquivo && email) {
    document.querySelector(
      "#buttonEspecialistaProgramadorSAP"
    ).disabled = false;
    return;
  } else {
    document.querySelector("#buttonEspecialistaProgramadorSAP").disabled = true;
  }
}

// FOURTH FORM Desenvolvedora CSharp
const fileDesenvolvedoraCSharp = document.querySelector(
  "#arquivoDesenvolvedoraCSharp"
);
const curriculumDesenvolvedoraCsharp = document.querySelector(
  ".arquivo-Desenvolvedoracsharp"
);
curriculumDesenvolvedoraCsharp.innerHTML = arquivoText;

fileDesenvolvedoraCSharp.addEventListener("change", function (el) {
  el.preventDefault();
  const inputDesenvolvedoraCSharp = el.target;
  const fileDesenvolvedoraCSharp = inputDesenvolvedoraCSharp.files[0];
  if (fileDesenvolvedoraCSharp) {
    const reader = new FileReader();
    if (fileDesenvolvedoraCSharp.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumDesenvolvedoraCsharp.innerHTML =
            fileDesenvolvedoraCSharp.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileDesenvolvedoraCSharp);
  } else {
    curriculumDesenvolvedoraCsharp.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarDesenvolvedoraCSharp(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
           showModal();
          // $("#csharp").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoDesenvolvedoraCSharp").val("");
          $(":input#emailpessoadesenvolvedoraCSharp").val("");
          document.querySelector(".arquivo-Desenvolvedoracsharp").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#csharp").html("");
          }, 2000);
        } else {
          $("#csharp").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoDesenvolvedoraCSharp").val("");
          $(":input#emailpessoadesenvolvedoraCSharp").val("");
          document.querySelector(".arquivo-Desenvolvedoracsharp").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#csharp").html("");
          }, 2000);
        }
      } else {
        $("#csharp").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoDesenvolvedoraCSharp").val("");
        $(":input#emailpessoadesenvolvedoraCSharp").val("");
        document.querySelector(".arquivo-Desenvolvedoracsharp").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#csharp").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formDesenvolvedoraCSharp")
  .addEventListener("submit", enviarDesenvolvedoraCSharp);

function toggleButtoncsharp() {
  const arquivo = document.querySelector("#arquivoDesenvolvedoraCSharp").value;
  const email = document.querySelector(
    "#emailpessoadesenvolvedoraCSharp"
  ).value;
  if (arquivo && email) {
    document.querySelector("#buttonDesenvolvedoraCSharp").disabled = false;
    return;
  } else {
    document.querySelector("#buttonDesenvolvedoraCSharp").disabled = true;
  }
}

// FOURTH FORM Pessoa DevOps Cloud
const fileDevOpsCloud = document.querySelector("#arquivoDevOpsCloud");
const curriculumDevOpsCloud = document.querySelector(".arquivo-DevOpsCloud");
curriculumDevOpsCloud.innerHTML = arquivoText;

fileDevOpsCloud.addEventListener("change", function (el) {
  el.preventDefault();
  const inputDevOpsCloud = el.target;
  const fileDevOpsCloud = inputDevOpsCloud.files[0];
  if (fileDevOpsCloud) {
    const reader = new FileReader();
    if (fileDevOpsCloud.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumDevOpsCloud.innerHTML = fileDevOpsCloud.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileDevOpsCloud);
  } else {
    curriculumDevOpsCloud.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarDevOpsCloud(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
           showModal();
          // $("#Cloud").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoDevOpsCloud").val("");
          $(":input#emailDevOpsCloud").val("");
          document.querySelector(".arquivo-DevOpsCloud").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Cloud").html("");
          }, 2000);
        } else {
          $("#Cloud").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoDevOpsCloud").val("");
          $(":input#emailDevOpsCloud").val("");
          document.querySelector(".arquivo-DevOpsCloud").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Cloud").html("");
          }, 2000);
        }
      } else {
        $("#Cloud").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoDevOpsCloud").val("");
        $(":input#emailDevOpsCloud").val("");
        document.querySelector(".arquivo-DevOpsCloud").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#Cloud").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formCloud")
  .addEventListener("submit", enviarDevOpsCloud);

function toggleButtonCloud() {
  const arquivo = document.querySelector("#arquivoDevOpsCloud").value;
  const email = document.querySelector("#emailDevOpsCloud").value;
  if (arquivo && email) {
    document.querySelector("#buttonCloud").disabled = false;
    return;
  } else {
    document.querySelector("#buttonCloud").disabled = true;
  }
}

// FOURTH FORM Desenvolvedora Tableau
const filepessoaTableau = document.querySelector(
  "#arquivoTableau"
);
const curriculumtableau = document.querySelector(
  ".arquivo-Tableau"
);
curriculumtableau.innerHTML = arquivoText;

filepessoaTableau.addEventListener("change", function (el) {
  el.preventDefault();
  const inputTableau = el.target;
  const filepessoaTableau = inputTableau.files[0];
  if (filepessoaTableau) {
    const reader = new FileReader();
    if (filepessoaTableau.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumtableau.innerHTML =
            filepessoaTableau.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(filepessoaTableau);
  } else {
    curriculumtableau.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarTableau(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
          showModal()
          // $("#Tableau").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoTableau").val("");
          $(":input#emailTableau").val("");
          document.querySelector(".arquivo-Tableau").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Tableau").html("");
          }, 2000);
        } else {
          $("#Tableau").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoTableau").val("");
          $(":input#emailTableau").val("");
          document.querySelector(".arquivo-Tableau").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Tableau").html("");
          }, 2000);
        }
      } else {
        $("#Tableau").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoTableau").val("");
        $(":input#emailTableau").val("");
        document.querySelector(".arquivo-Tableau").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#Tableau").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formTableau")
  .addEventListener("submit", enviarTableau);

function toggleButtonTableau() {
  const arquivo = document.querySelector("#arquivoTableau").value;
  const email = document.querySelector(
    "#emailTableau"
  ).value;
  if (arquivo && email) {
    document.querySelector("#buttonTableau").disabled = false;
    return;
  } else {
    document.querySelector("#buttonTableau").disabled = true;
  }
}

// // FOURTH FORM Desenvolvedora SAP GRC
const filepessoaFuncoesSAPGRC = document.querySelector(
  "#arquivoFuncoesSAPGRC"
);
const curriculumpessoaFuncoesSAPGRC = document.querySelector(
  ".arquivo-FuncoesSAPGRC"
);
curriculumpessoaFuncoesSAPGRC.innerHTML = arquivoText;

filepessoaFuncoesSAPGRC.addEventListener("change", function (el) {
  el.preventDefault();
  const inputFuncoesSAPGRC = el.target;
  const filepessoaFuncoesSAPGRC = inputFuncoesSAPGRC.files[0];
  if (filepessoaFuncoesSAPGRC) {
    const reader = new FileReader();
    if (filepessoaFuncoesSAPGRC.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumpessoaFuncoesSAPGRC.innerHTML =
            filepessoaFuncoesSAPGRC.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(filepessoaFuncoesSAPGRC);
  } else {
    curriculumpessoaFuncoesSAPGRC.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarpessoaFuncoesSAPGRC(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
          showModal()
          // $("#Sapgrc").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoFuncoesSAPGRC").val("");
          $(":input#emailFuncoesSAPGRC").val("");
          document.querySelector(".arquivo-FuncoesSAPGRC").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Sapgrc").html("");
          }, 2000);
        } else {
          $("#Sapgrc").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoFuncoesSAPGRC").val("");
          $(":input#emailFuncoesSAPGRC").val("");
          document.querySelector(".arquivo-FuncoesSAPGRC").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Sapgrc").html("");
          }, 2000);
        }
      } else {
        $("#Sapgrc").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoFuncoesSAPGRC").val("");
        $(":input#emailFuncoesSAPGRC").val("");
        document.querySelector(".arquivo-FuncoesSAPGRC").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#Sapgrc").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formSap")
  .addEventListener("submit", enviarpessoaFuncoesSAPGRC);

function toggleButtonSAPGRC() {
  const arquivo = document.querySelector("#arquivoFuncoesSAPGRC").value;
  const email = document.querySelector(
    "#emailFuncoesSAPGRC"
  ).value;
  if (arquivo && email) {
    document.querySelector("#buttonSAPGRC").disabled = false;
    return;
  } else {
    document.querySelector("#buttonSAPGRC").disabled = true;
  }
}


// // FOURTH FORM Desenvolvedora PHP

const filepessoaDesenvolvedorPHP = document.querySelector(
  "#arquivoDesenvolvedorPHP"
);
const curriculumpessoaDesenvolvedorPHP = document.querySelector(
  ".arquivo-DesenvolvedorPHP"
);
curriculumpessoaDesenvolvedorPHP.innerHTML = arquivoText;

filepessoaDesenvolvedorPHP.addEventListener("change", function (el) {
  el.preventDefault();
  const inputDesenvolvedorPHP = el.target;
  const filepessoaDesenvolvedorPHP = inputDesenvolvedorPHP.files[0];
  if (filepessoaDesenvolvedorPHP) {
    const reader = new FileReader();
    if (filepessoaDesenvolvedorPHP.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumpessoaDesenvolvedorPHP.innerHTML =
            filepessoaDesenvolvedorPHP.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(filepessoaDesenvolvedorPHP);
  } else {
    curriculumpessoaDesenvolvedorPHP.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarpessoaDesenvolvedorPHP(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
          showModal()
          // $("#Php").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoDesenvolvedorPHP").val("");
          $(":input#emailDesenvolvedorPHP").val("");
          document.querySelector(".arquivo-DesenvolvedorPHP").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Php").html("");
          }, 2000);
        } else {
          $("#Php").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoDesenvolvedorPHP").val("");
          $(":input#emailDesenvolvedorPHP").val("");
          document.querySelector(".arquivo-DesenvolvedorPHP").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Php").html("");
          }, 2000);
        }
      } else {
        $("#Php").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoDesenvolvedorPHP").val("");
        $(":input#emailDesenvolvedorPHP").val("");
        document.querySelector(".arquivo-DesenvolvedorPHP").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#Php").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formPhp")
  .addEventListener("submit", enviarpessoaDesenvolvedorPHP);

function toggleButtonPhp() {
  const arquivo = document.querySelector("#arquivoDesenvolvedorPHP").value;
  const email = document.querySelector(
    "#emailDesenvolvedorPHP"
  ).value;
  if (arquivo && email) {
    document.querySelector("#buttonPhp").disabled = false;
    return;
  } else {
    document.querySelector("#buttonPhp").disabled = true;
  }
}


// // FOURTH FORM Gerente de projetos
const filepessoaGerentedeProjetos = document.querySelector(
  "#arquivoGerentedeProjetos"
);
const curriculumpessoaGerentedeProjetos = document.querySelector(
  ".arquivo-GerentedeProjetos"
);
curriculumpessoaGerentedeProjetos.innerHTML = arquivoText;

filepessoaGerentedeProjetos.addEventListener("change", function (el) {
  el.preventDefault();
  const inputarquivoGerentedeProjetos = el.target;
  const filepessoaGerentedeProjetos = inputarquivoGerentedeProjetos.files[0];
  if (filepessoaGerentedeProjetos) {
    const reader = new FileReader();
    if (filepessoaGerentedeProjetos.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumpessoaGerentedeProjetos.innerHTML =
            filepessoaGerentedeProjetos.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(filepessoaGerentedeProjetos);
  } else {
    curriculumpessoaGerentedeProjetos.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarpessoaGerentedeProjetos(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
          showModal()
          // $("#Gerente").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoGerentedeProjetos").val("");
          $(":input#emailGerentedeProjetos").val("");
          document.querySelector(".arquivo-GerentedeProjetos").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Gerente").html("");
          }, 2000);
        } else {
          $("#Gerente").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoGerentedeProjetos").val("");
          $(":input#emailGerentedeProjetos").val("");
          document.querySelector(".arquivo-GerentedeProjetos").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Gerente").html("");
          }, 2000);
        }
      } else {
        $("#Gerente").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoGerentedeProjetos").val("");
        $(":input#emailGerentedeProjetos").val("");
        document.querySelector(".arquivo-GerentedeProjetos").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#Gerente").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formGerente")
  .addEventListener("submit", enviarpessoaGerentedeProjetos);

function toggleButtonGerente() {
  const arquivo = document.querySelector("#arquivoGerentedeProjetos").value;
  const email = document.querySelector(
    "#emailGerentedeProjetos"
  ).value;
  if (arquivo && email) {
    document.querySelector("#buttonGerente").disabled = false;
    return;
  } else {
    document.querySelector("#buttonGerente").disabled = true;
  }
}

// // FOURTH FORM Desenvolvedora Conheimento em GRC
const filepessoaconhecimentoemGRC = document.querySelector(
  "#arquivoconhecimentoemGRC"
);
const curriculumpessoaconhecimentoemGRC = document.querySelector(
  ".arquivo-conhecimentoemGRC"
);
curriculumpessoaconhecimentoemGRC.innerHTML = arquivoText;

filepessoaconhecimentoemGRC.addEventListener("change", function (el) {
  el.preventDefault();
  const inputconhecimentoemGRC = el.target;
  const filepessoaconhecimentoemGRC = inputconhecimentoemGRC.files[0];
  if (filepessoaconhecimentoemGRC) {
    const reader = new FileReader();
    if (filepessoaconhecimentoemGRC.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumpessoaconhecimentoemGRC.innerHTML =
            filepessoaconhecimentoemGRC.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(filepessoaconhecimentoemGRC);
  } else {
    curriculumpessoaconhecimentoemGRC.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarpessoaconhecimentoemGRC(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
          showModal()
          // $("#GRC").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoconhecimentoemGRC").val("");
          $(":input#emailconhecimentoemGRC").val("");
          document.querySelector(".arquivo-conhecimentoemGRC").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#GRC").html("");
          }, 2000);
        } else {
          $("#GRC").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoconhecimentoemGRC").val("");
          $(":input#emailconhecimentoemGRC").val("");
          document.querySelector(".arquivo-conhecimentoemGRC").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#GRC").html("");
          }, 2000);
        }
      } else {
        $("#GRC").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoconhecimentoemGRC").val("");
        $(":input#emailconhecimentoemGRC").val("");
        document.querySelector(".arquivo-conhecimentoemGRC").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#GRC").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formGRC")
  .addEventListener("submit", enviarpessoaconhecimentoemGRC);

function toggleButtonGRC() {
  const arquivo = document.querySelector("#arquivoconhecimentoemGRC").value;
  const email = document.querySelector(
    "#emailconhecimentoemGRC"
  ).value;
  if (arquivo && email) {
    document.querySelector("#buttonGRC").disabled = false;
    return;
  } else {
    document.querySelector("#buttonGRC").disabled = true;
  }
}

// // FOURTH FORM Desenvolvedora Analista BI
const filepessoaAnalistadeBI = document.querySelector(
  "#arquivoAnalistadeBI"
);
const curriculumpessoaAnalistadeBI = document.querySelector(
  ".arquivo-AnalistadeBI"
);
curriculumpessoaAnalistadeBI.innerHTML = arquivoText;

filepessoaAnalistadeBI.addEventListener("change", function (el) {
  el.preventDefault();
  const inputpessoaAnalistadeBI = el.target;
  const filepessoaAnalistadeBI = inputpessoaAnalistadeBI.files[0];
  if (filepessoaAnalistadeBI) {
    const reader = new FileReader();
    if (filepessoaAnalistadeBI.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumpessoaAnalistadeBI.innerHTML =
            filepessoaAnalistadeBI.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(filepessoaAnalistadeBI);
  } else {
    curriculumpessoaAnalistadeBI.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarpessoaAnalistadeBI(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
          showModal()
          // $("#Bi").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoAnalistadeBI").val("");
          $(":input#emailAnalistadeBI").val("");
          document.querySelector(".arquivo-AnalistadeBI").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Bi").html("");
          }, 2000);
        } else {
          $("#Bi").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoAnalistadeBI").val("");
          $(":input#emailAnalistadeBI").val("");
          document.querySelector(".arquivo-AnalistadeBI").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Bi").html("");
          }, 2000);
        }
      } else {
        $("#Bi").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoAnalistadeBI").val("");
        $(":input#emailAnalistadeBI").val("");
        document.querySelector(".arquivo-AnalistadeBI").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#Bi").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formBi")
  .addEventListener("submit", enviarpessoaAnalistadeBI);

function toggleButtonBi() {
  const arquivo = document.querySelector("#arquivoAnalistadeBI").value;
  const email = document.querySelector(
    "#emailAnalistadeBI"
  ).value;
  if (arquivo && email) {
    document.querySelector("#buttonBi").disabled = false;
    return;
  } else {
    document.querySelector("#buttonBi").disabled = true;
  }
}

// FOURTH FORM Scrum Master
const fileScrumMaster = document.querySelector("#arquivoScrumMaster");
const curriculumScrumMaster = document.querySelector(".arquivo-ScrumMaster");
curriculumScrumMaster.innerHTML = arquivoText;

fileScrumMaster.addEventListener("change", function (el) {
  el.preventDefault();
  const inputScrumMaste = el.target;
  const fileScrumMaster = inputScrumMaste.files[0];
  if (fileScrumMaster) {
    const reader = new FileReader();
    if (fileScrumMaster.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumScrumMaster.innerHTML = fileScrumMaster.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileScrumMaster);
  } else {
    curriculumScrumMaster.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarMaster(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
           showModal();
          // $("#Master").html(
          //   // "<div class='alert alert-success' onclick='showModal'></div>"
          // );
          $(":input#arquivoScrumMaster").val("");
          $(":input#emailPessoaScrumMaster").val("");
          document.querySelector(".arquivo-ScrumMaster").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Master").html("");
          }, 2000);
        } else {
          $("#Master").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoScrumMaster").val("");
          $(":input#emailPessoaScrumMaster").val("");
          document.querySelector(".arquivo-ScrumMaster").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Master").html("");
          }, 2000);
        }
      } else {
        $("#Master").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoScrumMaster").val("");
        $(":input#emailPessoaScrumMaster").val("");
        document.querySelector(".arquivo-ScrumMaster").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#Master").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formMaster")
  .addEventListener("submit", enviarMaster);

function toggleButtonMaster() {
  const arquivo = document.querySelector("#arquivoScrumMaster").value;
  const email = document.querySelector("#emailPessoaScrumMaster").value;
  if (arquivo && email) {
    document.querySelector("#buttonMaster").disabled = false;
    return;
  } else {
    document.querySelector("#buttonMaster").disabled = true;
  }
}

// FOURTH FORM Desenvolvedora Salesforces
const fileSalesforces = document.querySelector("#arquivoDesenvolvedoraSalesforces");
const curriculumSalesforces = document.querySelector(".arquivo-DesenvolvedoraSalesforces");
curriculumSalesforces.innerHTML = arquivoText;

fileSalesforces.addEventListener("change", function (el) {
  el.preventDefault();
  const inputDesenvolvedoraSalesforces = el.target;
  const fileSalesforces = inputDesenvolvedoraSalesforces.files[0];
  if (fileSalesforces) {
    const reader = new FileReader();
    if (fileSalesforces.size > 26214400) {
      message.innerHTML = "Tamanho Excedido";
      return false;
    } else {
      reader.addEventListener("load", function (e) {
        const readeTarget = e.target;
        if (readeTarget) {
          curriculumSalesforces.innerHTML = fileSalesforces.name;
        } else {
          alert("Por favor, escolha o arquivo");
        }
      });
    }
    reader.readAsDataURL(fileSalesforces);
  } else {
    curriculumSalesforces.innerHTML = choiceArchive;
  }
});

// envia o formulário por email
function enviarFormSalesforces(e) {
  e.preventDefault();
  let form = e.target;
  if (form.enviando) {
    return;
  }
  form.enviando = true;
  let oReq = new XMLHttpRequest();
  oReq.open("POST", form.getAttribute("action"), true);
  oReq.onreadystatechange = function () {
    
    if (oReq.readyState === 4) {
      form.enviando = false;
      if (oReq.status >= 200 && oReq.status < 300) {
        if (oReq.responseText === "sucesso") {
           showModal();
          $(":input#arquivoDesenvolvedoraSalesforces").val("");
          $(":input#emailDesenvolvedoraSalesforces").val("");
          document.querySelector(".arquivo-DesenvolvedoraSalesforces").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Salesforces").html("");
          }, 2000);
        } else {
          $("#Salesforces").html(
            "<div class='alert alert-danger'>Tivemos um erro no envio, tente novamente.</div>"
          );
          $(":input#arquivoDesenvolvedoraSalesforces").val("");
          $(":input#emailDesenvolvedoraSalesforces").val("");
          document.querySelector(".arquivo-DesenvolvedoraSalesforces").innerHTML =
            "Coloque seu currículo aqui";
          setTimeout(function () {
            $("#Salesforces").html("");
          }, 2000);
        }
      } else {
        $("#Salesforces").html(
          "<div class='alert alert-danger'>Erro HTTP:" + oReq.status + "</div>"
        );
        $(":input#arquivoDesenvolvedoraSalesforces").val("");
        $(":input#emailDesenvolvedoraSalesforces").val("");
        document.querySelector(".arquivo-DesenvolvedoraSalesforces").innerHTML =
          "Coloque seu currículo aqui";
        setTimeout(function () {
          $("#Salesforces").html("");
        }, 2000);
      }
    }
  };
  oReq.send(new FormData(form));
}
document
  .getElementById("formSalesforces")
  .addEventListener("submit", enviarFormSalesforces);

function toggleButtonSalesforces() {
  const arquivo = document.querySelector("#arquivoDesenvolvedoraSalesforces").value;
  const email = document.querySelector("#emailDesenvolvedoraSalesforces").value;
  if (arquivo && email) {
    document.querySelector("#buttonSalesforces").disabled = false;
    return;
  } else {
    document.querySelector("#buttonSalesforces").disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});


// Constrói a URL depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  var content = encodeURIComponent(document.title + " " + window.location.href);
  
  function setWhatsAppLink(id) {
    var element = document.getElementById(id);
    if (element) {
      element.href = "https://api.whatsapp.com/send?text=" + content;
      console.log(`Set WhatsApp link for ${id}`);
    } else {
      console.log(`Element with ID ${id} not found`);
    }
  }

  setWhatsAppLink("whatsapp-share-btt");
  setWhatsAppLink("whatsapp-share-sap");
  setWhatsAppLink("whatsapp-share-android");
  setWhatsAppLink("whatsapp-share-ios");
  setWhatsAppLink("whatsapp-share-frontend");
  setWhatsAppLink("whatsapp-share-testes");
  setWhatsAppLink("whatsapp-share-c");
  setWhatsAppLink("whatsapp-share-cloud");
}, false);



var modalWrap = null;

const showModal = () => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement("div");
  modalWrap.innerHTML = `
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-headerCenter">
            <h5 class="modal-title">Aloha!</h5>
          </div>
          <div>
            <button type="button" class="close-button" data-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body">
          <p class="white-modal"> Recebemos sua mensagem :D </p>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.append(modalWrap);

  const modalElement = modalWrap.querySelector('.modal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
};
