package start;

import com.WebServer;

public class Main {
    public static void main(String[] args){
        System.out.println("Type : kill");
        System.out.println("Then refresh");

        Thread webServerTHREAD = new Thread(new WebServer(8080,"Static"), "Thread 1");

        webServerTHREAD.start();

        while(webServerTHREAD.isAlive()){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}