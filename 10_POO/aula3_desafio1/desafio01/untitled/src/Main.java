import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner texto = new Scanner(System.in);
        String str;
        System.out.println("Coloque seu nome!");
        str = texto.nextLine();
        System.out.println("Seu nome é " + str);
    }
}