import threading
import time

const = 0

contador = 0 #recurso compartilhado

L = threading.Lock()
def Incrementar():
    global contador
    for _ in range(1000):
        L.acquire()
        try:
            x = contador
            time.sleep(0.000001)
            x = x + 1
            contador = x
        finally:
            L.release