#calculo media

turno = input("Turno das aulas: \n"+
              "M-Matutino:\n"+
              "V-Vespertino:\n"+
              "N-Noturno:\n")

nota1 = float(input("Digite a nota 1: "))
nota2 = float(input("Digite a nota 2: "))
nota3 = float(input("Digite a nota 3: "))

media = (nota1 + nota2 + nota3) / 3

if media < 3:
    print ("Reprovado")
elif media > 3 and media < 7:
    print ("Recuperação")
elif media > 7 and media < 9:
    print ("Aprovado")
else:
    print("Aprovado com louvor! ")