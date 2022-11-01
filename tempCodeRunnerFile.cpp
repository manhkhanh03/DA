#include <iostream>
#include <typeinfo>
using namespace std;

int main() {
    uint32_t a  = 12;
    cout << a;
    cout << typeid(a).name();
}