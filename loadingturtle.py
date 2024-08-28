from turtle import *
import colorsys

speed(0)
bgcolor('black')
h = 0.1 
pensize(4)

def fun():
    global h 
    for i in range(4):
        c= colorsys.hsv_to_rgb(h, 1, 1)
    fillcolor(c)
    h += 0.004
    begin_fill()
    fd(60)
    rt(50)
    fd(40)
    rt(20)
    fd(8)
    rt(7)
    fd(6)
    rt(4)
    end_fill()

for j in range(300):
    fun()
    goto( 0, 0)
    rt(10)
done()




